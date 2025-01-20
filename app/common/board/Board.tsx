"use client";

import {
    useState
} from "react"
import { 
    Box, 
    Table,
    HStack,
    ListCollection,
    createListCollection, 
} from "@chakra-ui/react";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPageText,
    PaginationPrevTrigger,
    PaginationRoot,
  } from "@/components/ui/pagination"

import styles from './board.module.css'
import Select from "../Select";
import { IBoard, ICategory } from "../Constants";

const pageSize = 5

function getTableHeader() {
    return (
        <Table.Header className={styles.table_header}>
            <Table.Row>
                <Table.ColumnHeader>번호</Table.ColumnHeader>
                <Table.ColumnHeader>법원</Table.ColumnHeader>
                <Table.ColumnHeader>판매자</Table.ColumnHeader>
                <Table.ColumnHeader>제목</Table.ColumnHeader>
                <Table.ColumnHeader>마감기한</Table.ColumnHeader>
                <Table.ColumnHeader>카테고리</Table.ColumnHeader>
                <Table.ColumnHeader>파일</Table.ColumnHeader>
            </Table.Row>
        </Table.Header>
    )
}

function getFilter({categories}: {categories: Array<ICategory>}) {
    function getKey(element: any) {
        return element.id;
    }

    const itemCollection = createListCollection({
        items: categories.map((category) => ({
            label: category.categoryName,
            value: category.id
        }))
    });

    return (
        <Table.Body>
            <Table.Row key="categorySelect" className={styles.table_row}>
                <Table.Cell> {/* index */} </Table.Cell>
                <Table.Cell> {/* court */} </Table.Cell>
                <Table.Cell> {/* seller */} </Table.Cell>
                <Table.Cell> {/* title */} </Table.Cell>
                <Table.Cell> {/* due */} </Table.Cell>
                <Table.Cell className={styles.table_component}>
                    <Select itemCollection={itemCollection} getKey={getKey} />
                </Table.Cell>
                <Table.Cell> {/* file */} </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}

function getTableBody(items: Array<IBoard>) {
    return (
        <Table.Body>
            {items.map((item) => (
                <Table.Row key={item.id} className={styles.table_row}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.court}</Table.Cell>
                    <Table.Cell>{item.seller}</Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>{item.due}</Table.Cell>
                    <Table.Cell>{item.categories.map(category => category.categoryName).join(",")}</Table.Cell>
                    <Table.Cell>
                        <a href={item.fileLink}>{item.fileLink.endsWith(".pdf") ? "pdf" : "hwp"}</a>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )
}

export default function Board({ boards, totalCount, categories, pageState, categoryIdState }
    : { 
        boards: Array<IBoard>, 
        totalCount: number, 
        categories: Array<ICategory>, 
        pageState: any, 
        categoryIdState: any 
    }) {
    const [page, setPage] = pageState;
    const [categoryId, setCategoryId] = categoryIdState;

    return (
        <>
            <Box height="370px">
                <Table.Root unstyled className={styles.table}>
                    {getTableHeader()}
                    {getFilter({categories})}
                    {getTableBody(boards)}
                </Table.Root>
            </Box>
            <Box>
                <PaginationRoot 
                    page={page}
                    count={totalCount} 
                    pageSize={pageSize}
                    onPageChange={(e) => setPage(e.page)}
                >
                    <HStack wrap="wrap">
                        <PaginationPageText format="long" flex="1" color="black"/>
                        <PaginationPrevTrigger color="black"/>
                        <PaginationNextTrigger color="black"/>
                    </HStack>
                </PaginationRoot>
            </Box>
        </>
    )
}