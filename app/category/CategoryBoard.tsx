"use client"

import { Button, IconButton, Text } from "@chakra-ui/react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { apiServerUrl, ICategory } from "../common/Constants";
import { ReactNode, useEffect, useState } from "react";
import { useCategory } from "../common/api/UseCategory";
import AlertDialog from "../common/dialog/AlertDialog";
import { FaTrashCan } from "react-icons/fa6";

interface CategoryBody {
    categoryName: string
}

function getCategoryColumns(refetch: any) {
    async function onClickAddCategoryButton(data: any) {
        await fetch(apiServerUrl + "/v1/category", {
            method: "POST",
            body: new Blob([JSON.stringify(data)], { type: "application/json" })
        })
        .then(() => refetch());
    }

    return [
        <Text>Category</Text>,
        <InputDialog <CategoryBody>
            title="새로운 카테고리 추가"
            label="카테고리 이름을 입력하세요"
            placeholder="카테고리"
            submitName="categoryName"
            onSubmitSave={onClickAddCategoryButton}
        >
            <IconButton size="sm" variant="outline">
                <PiPlusBold color="black" />
            </IconButton>
        </InputDialog>
    ];
}

function addTrashbin(categoryId: number, onClickDeleteCategoryButton: Function) {
    return (
        <AlertDialog onClick={() => onClickDeleteCategoryButton(categoryId)}>
            <IconButton size="sm" variant="ghost">
                <FaTrashCan color="black" />
            </IconButton>
        </AlertDialog>
    )
}

function getCategoryItems(items: Array<ICategory>, onChangeCategoryId: Function, onClickDeleteCategoryButton: Function) {
    var categoryTable:Array<Array<ReactNode>> = []

    items.map((category) => {
        categoryTable.push(
            [<Button size="md" variant="ghost" onClick={() => onChangeCategoryId(category.id)}>
                <Text fontSize={'17px'} color={'black'}>{category.categoryName}</Text>
            </Button>,
            addTrashbin(category.id, onClickDeleteCategoryButton)
            ]
        )
    })

    return categoryTable;
}


export default function CategoryBoard({categoryBundleState}: {categoryBundleState: any}) {
    const categoryApiResult = useCategory();
    const [categoryBundleApiResult, categoryBundleApiProps] = categoryBundleState;

    async function onClickDeleteCategoryButton(categoryId: number) {
        await fetch(apiServerUrl + "/v1/category/" + categoryId, {
            method: "DELETE"
        })
        .then(() => categoryApiResult.refetch())
        .then(() => categoryBundleApiResult.refetch());
    }
    
    const categoryColumns = getCategoryColumns(categoryApiResult.refetch);
    const categoryItems = getCategoryItems(categoryApiResult.data, categoryBundleApiProps.onChangeCategoryId, onClickDeleteCategoryButton);
    
    return (
        <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
    )
}