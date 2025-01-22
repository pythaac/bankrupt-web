import { ReactNode } from "react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import AlertDialog from "../common/dialog/AlertDialog";
import { IconButton, Text } from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { ICategoryResource } from "../common/Constants";
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
    const keywords = categoryBundleApiResult.data.categoryResources;

    
    const kewordsColumns = getKewordColumns();
    const keywordItems = getKewordItems(keywords);
    addTrashbin(keywordItems);

    return (
        <ScrolledHalfBoard columns={kewordsColumns} items={keywordItems} />
    )
}