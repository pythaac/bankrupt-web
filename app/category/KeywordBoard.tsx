import { ReactNode } from "react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import AlertDialog from "../common/dialog/AlertDialog";
import { IconButton, Text } from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { apiServerUrl, ICategoryResource } from "../common/Constants";

interface KeywordBody {
    keyword: string
}

function getKewordColumns(refetch: any, category: any) {
    async function onClickAddKewordButton(data: any) {
        if (category !== undefined) {
            await fetch(apiServerUrl + "/v1/category/resource", {
                method: "POST",
                body: new Blob([JSON.stringify({...data, categoryId: category.id})], { type: "application/json" })
            })
            .then(() => {refetch()});
        }
    }

    return [
        <Text>Keywords</Text>,
        <InputDialog
            title="새로운 키워드 추가"
            label="땡땡 카테고리에 추가할 키워드를 입력하세요"
            placeholder="키워드"
            submitName="keyword"
            onSubmitSave={onClickAddKewordButton}
        >
            <IconButton size="sm" variant="outline">
                <PiPlusBold color="black" />
            </IconButton>
        </InputDialog>
    ];
}

function addTrashbin(categoryResoruceId: number, onClickDeleteCategoryResourceButton: Function) {
    return (
        <AlertDialog onClick={() => onClickDeleteCategoryResourceButton(categoryResoruceId)}>
            <IconButton size="sm" variant="ghost">
                <FaTrashCan color="black" />
            </IconButton>
        </AlertDialog>
    )
}

function getKewordItems(keywords: Array<ICategoryResource>, onClickDeleteCategoryResourceButton: Function) {

    var keywordTable:Array<Array<ReactNode>> = []

    if (keywords !== undefined) {
        keywords.map((keyword) => {
            keywordTable.push(
                [
                <Text>{keyword.keyword}</Text>,
                addTrashbin(keyword.categoryResourceId, onClickDeleteCategoryResourceButton)
            ]
            )
        })
    }

    return keywordTable;
}

export default function KeywordBoard({categoryBundleState}: {categoryBundleState: any}) {
    const [categoryBundleApiResult, categoryBundleApiProps] = categoryBundleState;
    const category = categoryBundleApiResult.data.category;
    const keywords = categoryBundleApiResult.data.categoryResources;

    async function onClickDeleteCategoryResourceButton(categoryResourceId: number) {
        await fetch(apiServerUrl + "/v1/category/resource/" + categoryResourceId, {
            method: "DELETE"
        })
        .then(() => categoryBundleApiResult.refetch());
    }
    
    const kewordsColumns = getKewordColumns(categoryBundleApiResult.refetch, category);
    const keywordItems = getKewordItems(keywords, onClickDeleteCategoryResourceButton);

    return (
        <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
    )
}