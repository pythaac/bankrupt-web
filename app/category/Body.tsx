"use client";

import { 
    Flex,
    Text
} from "@chakra-ui/react";
import { 
    IconButton,
    Button
} from "@chakra-ui/react"
import { PiPlusBold } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { ReactNode } from "react";

import ScrolledHalfBoard from '../common/ScrolledHalfBoard'
import styles from './category.module.css'

interface category {
    categoryName: string
}

function getCategoryItems(items: Array<category>) {
    var categoryTable:Array<Array<ReactNode>> = []

    items.map((category) => {
        categoryTable.push(
            [<Button size="md" variant="ghost">
                <Text fontSize={'17px'} color={'black'}>{category.categoryName}</Text>
            </Button>]
        )
    })

    return categoryTable;
}

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
    const categoryApiResult = [
        {categoryName: "채권"}, {categoryName: "부동산"},
        {categoryName: "채권"}, {categoryName: "부동산"},
        {categoryName: "채권"}, {categoryName: "부동산"},
        {categoryName: "채권"}, {categoryName: "부동산"},
        {categoryName: "채권"}, {categoryName: "부동산"},
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

    const categoryItems = getCategoryItems(categoryApiResult);

    addTrashbin(categoryItems);
    addTrashbin(kewordsItems);

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
            <ScrolledHalfBoard columns={kewordsColumns} items={kewordsItems} />
        </Flex>
    )
}