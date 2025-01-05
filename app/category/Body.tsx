"use client";

import { 
    Flex,
    Text
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { PiPlusBold } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { ReactNode } from "react";

import ScrolledHalfBoard from '../common/ScrolledHalfBoard'
import styles from './category.module.css'

function addTrashbin(items: Array<Array<ReactNode>>) {
    items.map((row) => {
        row.push(
            <IconButton size="sm" variant="ghost">
                <FaTrashCan color="black" />
            </IconButton>
        )
    })
}

export default function Body() {
    const categoryColumns = [
        <Text>Category</Text>,
        <IconButton size="sm" variant="outline">
            <PiPlusBold color="black" />
        </IconButton>
    ]
    const categoryItems = [
        [<Text>채권</Text>], [<Text>부동산</Text>],
        [<Text>채권</Text>], [<Text>부동산</Text>],
        [<Text>채권</Text>], [<Text>부동산</Text>],
        [<Text>채권</Text>], [<Text>부동산</Text>],
        [<Text>채권</Text>], [<Text>부동산</Text>],
        [<Text>채권</Text>], [<Text>부동산</Text>],
    ]
    const kewordsColumns = [
        <Text>Keywords</Text>,
        <IconButton size="sm" variant="outline">
            <PiPlusBold color="black" />
        </IconButton>
    ]
    const kewordsItems = [
        [<Text>채무자</Text>],
        [<Text>채무</Text>],
        [<Text>채무자</Text>],
        [<Text>채무</Text>],
        [<Text>채무자</Text>],
        [<Text>채무</Text>],
    ]

    addTrashbin(categoryItems);
    addTrashbin(kewordsItems);

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
            <ScrolledHalfBoard columns={kewordsColumns} items={kewordsItems} />
        </Flex>
    )
}