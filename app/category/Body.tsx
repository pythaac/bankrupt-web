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
import { useCategory } from "../common/api/UseCategory";
import { ICategory, ICategoryResource } from "../common/Constants";
import { useCategoryBundle } from "../common/api/UseCategoryBundle";

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

function getCategoryColumns() {
    return [
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
    ];
}

function getKewordColumns() {
    return [
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
    ];
}

function getCategoryItems(items: Array<ICategory>, onChangeCategoryId: Function) {
    var categoryTable:Array<Array<ReactNode>> = []

    items.map((category) => {
        categoryTable.push(
            [<Button size="md" variant="ghost" onClick={() => onChangeCategoryId(category.id)}>
                <Text fontSize={'17px'} color={'black'}>{category.categoryName}</Text>
            </Button>]
        )
    })

    return categoryTable;
}

function getKewordItems(keywords: Array<ICategoryResource>) {

    var keywordTable:Array<Array<ReactNode>> = []

    if (keywords !== undefined) {
        keywords.map((keyword) => {
            keywordTable.push(
                [<Text>{keyword.keyword}</Text>]
            )
        })
    }

    return keywordTable;
}

export default function Body() {

    const categoryApiResult = useCategory();
    const [categoryBundleApiResult, categoryBundleApiProps] = useCategoryBundle();
    const keywords = categoryBundleApiResult.data.categoryResources;
    const onChangeCategoryId = categoryBundleApiProps.onChangeCategoryId;

    const categoryColumns = getCategoryColumns();
    const kewordsColumns = getKewordColumns();

    const categoryItems = getCategoryItems(categoryApiResult.data, onChangeCategoryId);
    const keywordItems = getKewordItems(keywords);

    addTrashbin(categoryItems);
    addTrashbin(keywordItems);

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
            <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
        </Flex>
    )
}