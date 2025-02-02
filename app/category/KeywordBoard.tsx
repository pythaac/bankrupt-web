import { ReactNode } from "react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import AlertDialog from "../common/dialog/AlertDialog";
import { IconButton, Text } from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { apiServerUrl, IApiResult, ICategoryBundle, ICategoryResource } from "../common/Constants";

interface KeywordBody {
    keyword: string
}

function getKewordColumns(categoryBundleApiResult: IApiResult<ICategoryBundle>) {

    const category = categoryBundleApiResult.data.category;

    async function onClickAddKewordButton(data: any) {
        if (!!category) {
            const responsePost = await fetch(apiServerUrl + "/v1/category/resource", {
                method: "POST",
                body: new Blob([JSON.stringify({...data, categoryId: category.id})], { type: "application/json" })
            })
            if (!responsePost.ok) return false;

            await categoryBundleApiResult.refetch();
            if (categoryBundleApiResult.error) return false;

            return true;
        }
    }

    return [
        <Text>Keywords</Text>,
        <InputDialog
            title="새로운 키워드 추가"
            label={`${category?.categoryName} 카테고리에 추가할 키워드를 입력하세요`}
            placeholder="키워드"
            submitName="keyword"
            onSubmitSave={onClickAddKewordButton}
            disabled={!category}
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

function getKewordItems(categoryBundleApiResult: IApiResult<ICategoryBundle>) {

    var keywordTable:Array<Array<ReactNode>> = []

    async function onClickDeleteCategoryResourceButton(categoryResourceId: number) {
        const responseDelete = await fetch(apiServerUrl + "/v1/category/resource/" + categoryResourceId, {
            method: "DELETE"
        })
        if (!responseDelete.ok) return false;

        await categoryBundleApiResult.refetch();
        if (categoryBundleApiResult.error) return false;

        return true;
    }

    const keywords = categoryBundleApiResult.data.categoryResources;

    if (!!keywords) {
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
    
    const kewordsColumns = getKewordColumns(categoryBundleApiResult);
    const keywordItems = getKewordItems(categoryBundleApiResult);

    return (
        <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
    )
}