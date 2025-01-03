"use client";

import { 
    Box, 
    Table,
} from "@chakra-ui/react";


import styles from './component.module.css'
import CustomScrollbars from "./CustomScrollbars";

interface Item {
    index: number;
    court: string;
}

function getTableHeader() {
    return (
        <Table.Header className={styles.table_header}>
            <Table.Row>
                <Table.ColumnHeader>번호</Table.ColumnHeader>
                <Table.ColumnHeader>법원</Table.ColumnHeader>
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
                </Table.Row>
            ))}
        </Table.Body>
    )
}

export default function ScrolledHalfBoard({ items }: { items: Array<Item> }) {

    return (
        <Box width="45%" height="100%">
            <CustomScrollbars>
                <Table.Root unstyled className={styles.table}>
                    {getTableHeader()}
                    {getTableBody(items)}
                </Table.Root>
            </CustomScrollbars>
        </Box>
    )
}