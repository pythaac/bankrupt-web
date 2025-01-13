"use client";

import { 
    Flex,
    Text,
} from "@chakra-ui/react";
import { 
    IconButton,
    Button
} from "@chakra-ui/react"
import { PiPlusBold } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { ReactNode, useState } from "react";

import ScrolledHalfBoard from '@/app/common/board/ScrolledHalfBoard'
import styles from './category.module.css'
import InputDialog from "@/app/common/dialog/InputDialog";
import AlertDialog from "@/app/common/dialog/AlertDialog";

interface category {
    categoryId: number,
    categoryName: string,
}

interface keyword {
    categoryId: number,
    keywordId: number,
    keywords: string[]
}

export default function Body() {
    const [keywords, setKeywords] = useState<string[]>()

    function onClickCategory(categoryId: number) {
        const keywordMap = [
            {categoryId: 1, keywordId: 1, kewords : ["아파트", "주택", "빌라", "전용면적"]},
            {categoryId: 2, keywordId: 2, kewords : ["자동차", "트럭", "승용차", "자가용", "버스"]},
            {categoryId: 3, keywordId: 3, kewords : ["땅", "논", "밭", "산", "대지"]},
        ]
    
        const result = keywordMap.filter((keyword) => keyword.categoryId === categoryId)[0];
        setKeywords(result.kewords);
    }
    
    function getCategoryItems(items: Array<category>) {
        var categoryTable:Array<Array<ReactNode>> = []
    
        items.map((category) => {
            categoryTable.push(
                [<Button size="md" variant="ghost" onClick={() => onClickCategory(category.categoryId)}>
                    <Text fontSize={'17px'} color={'black'}>{category.categoryName}</Text>
                </Button>]
            )
        })
    
        return categoryTable;
    }
    
    function getKewordItems() {
    
        var keywordTable:Array<Array<ReactNode>> = []
    
        if (keywords !== undefined) {
            keywords.map((keyword) => {
                keywordTable.push(
                    [<Text>{keyword}</Text>]
                )
            })
        }
    
        return keywordTable;
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
        {categoryId: 1, categoryName: "부동산"},
        {categoryId: 2, categoryName: "차량"},
        {categoryId: 3, categoryName: "토지"},
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

    const categoryItems = getCategoryItems(categoryApiResult);
    const keywordItems = getKewordItems();

    addTrashbin(categoryItems);
    addTrashbin(keywordItems);

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
            <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
        </Flex>
    )
}