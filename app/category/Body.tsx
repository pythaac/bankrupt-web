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

import ScrolledHalfBoard from '@/app/common/board/ScrolledHalfBoard'
import styles from './category.module.css'
import InputDialog from "@/app/common/dialog/InputDialog";
import AlertDialog from "@/app/common/dialog/AlertDialog";

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
            <AlertDialog>
                <IconButton size="sm" variant="ghost">
                    <FaTrashCan color="black" />
                </IconButton>
            </AlertDialog>
        )
    })
}

export default function Body() {
    const categoryColumns = [
        <Text>Category</Text>,
        <InputDialog 
            title="새로운 카테고리 추가"
            label="카테고리 이름을 입력하세요"
            placeholder="카테고리"
        >
            <IconButton size="sm" variant="outline">
                <PiPlusBold color="black" />
            </IconButton>
        </InputDialog>
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
        <InputDialog
            title="새로운 키워드 추가"
            label="땡땡 카테고리에 추가할 키워드를 입력하세요"
            placeholder="키워드"
        >
            <IconButton size="sm" variant="outline">
                <PiPlusBold color="black" />
            </IconButton>
        </InputDialog>
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