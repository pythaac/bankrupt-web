import { 
    Box, 
    Table,
} from "@chakra-ui/react";

import styles from './component.module.css'
import CustomScrollbars from "./CustomScrollbars";
import { ReactNode } from "react";

function getTableHeader(columns: Array<ReactNode>) {
    return (
        <Table.Header className={styles.table_header}>
            <Table.Row>
                {columns.map((column, i) => (
                    <Table.ColumnHeader key={i}>{column}</Table.ColumnHeader>
                ))}
            </Table.Row>
        </Table.Header>
    )
}

function getTableBody(items: Array<Array<ReactNode>>) {
    return (
        <Table.Body>
            {items.map((item, i) => (
                <Table.Row key={i} className={styles.table_row}>
                    {item.map((node, i) => (
                        <Table.Cell key={i}>{node}</Table.Cell>
                    ))}
                </Table.Row>
            ))}
        </Table.Body>
    )
}

export default function ScrolledHalfBoard({ columns, items }: { columns: Array<ReactNode>,  items: Array<Array<ReactNode>> }) {

    return (
        <Box width="45%" height="100%" overflowY={'auto'}>
            {/* <CustomScrollbars> */}
                <Table.Root unstyled className={styles.table}>
                    {getTableHeader(columns)}
                    {getTableBody(items)}
                </Table.Root>
            {/* </CustomScrollbars> */}
        </Box>
    )
}