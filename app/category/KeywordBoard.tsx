import { ReactNode } from "react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import AlertDialog from "../common/dialog/AlertDialog";
import { IconButton, Text } from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { apiServerUrl, ICategoryResource } from "../common/Constants";

interface KeywordBody {
    categoryName: string
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

function getKewordColumns(refetch: any, category: any) {
    async function onClickAddKewordButton(data: any) {
        await fetch(apiServerUrl + "/v1/category/resource", {
            method: "POST",
            body: JSON.stringify({...data, categoryId: category.id})
        })
        .then(() => {refetch()});
    }

    return [
        <Text>Keywords</Text>,
        <InputDialog
            title="새로운 키워드 추가"
            label="땡땡 카테고리에 추가할 키워드를 입력하세요"
            placeholder="키워드"
            submitName="categoryName"
            onSubmitSave={onClickAddKewordButton}
        >
            <IconButton size="sm" variant="outline">
                <PiPlusBold color="black" />
            </IconButton>
        </InputDialog>
    ];
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

export default function KeywordBoard({categoryBundleState}: {categoryBundleState: any}) {
    const [categoryBundleApiResult, categoryBundleApiProps] = categoryBundleState;
    const category = categoryBundleApiResult.data.category;
    const keywords = categoryBundleApiResult.data.categoryResources;

    
    const kewordsColumns = getKewordColumns(categoryBundleApiResult.refetch, category);
    const keywordItems = getKewordItems(keywords);
    addTrashbin(keywordItems);

    return (
        <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
    )
}