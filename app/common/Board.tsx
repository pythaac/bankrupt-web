"use client";

import {
    useState
} from "react"
import { 
    Box, 
    Table,
    HStack, 
} from "@chakra-ui/react";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
  } from "@/components/ui/pagination"

import styles from './component.module.css'

const pageSize = 5

interface Item {
    index: number;
    court: string;
    seller: string;
    title: string;
    due: string;
    category: string;
    file: string;
}

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

function getTableBody(items: Array<Item>) {
    return (
        <Table.Body>
            {items.map((item) => (
                <Table.Row key={item.index} className={styles.table_row}>
                    <Table.Cell>{item.index}</Table.Cell>
                    <Table.Cell>{item.court}</Table.Cell>
                    <Table.Cell>{item.seller}</Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>{item.due}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell>{item.file}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )
}

export default function Board({ items }: { items: Array<Item> }) {
    const [page, setPage] = useState(1)

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const visibleItems = items.slice(startRange, endRange)

    return (
        <>
            <Box height="320px">
                <Table.Root unstyled className={styles.table}>
                    {getTableHeader()}
                    {getTableBody(visibleItems)}
                </Table.Root>
            </Box>
            <Box>
                <PaginationRoot 
                    page={page}
                    count={items.length} 
                    pageSize={pageSize}
                    onPageChange={(e) => setPage(e.page)}
                >
                    <HStack wrap="wrap">
                    <PaginationPrevTrigger color="black"/>
                    <PaginationItems color="black"/>
                    <PaginationNextTrigger color="black"/>
                    </HStack>
                </PaginationRoot>
            </Box>
        </>
    )
}