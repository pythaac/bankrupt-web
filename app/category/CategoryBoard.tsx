import { Button, IconButton, Text } from "@chakra-ui/react";
import ScrolledHalfBoard from "../common/board/ScrolledHalfBoard";
import InputDialog from "../common/dialog/InputDialog";
import { PiPlusBold } from "react-icons/pi";
import { ICategory } from "../common/Constants";
import { ReactNode } from "react";
import { useCategory } from "../common/api/UseCategory";
import { useCategoryBundle } from "../common/api/UseCategoryBundle";
import AlertDialog from "../common/dialog/AlertDialog";
import { FaTrashCan } from "react-icons/fa6";


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

export default function CategoryBoard({categoryBundleState}: {categoryBundleState: any}) {
    const categoryApiResult = useCategory();
    const [categoryBundleApiResult, categoryBundleApiProps] = categoryBundleState;
    
    const categoryColumns = getCategoryColumns();
    const categoryItems = getCategoryItems(categoryApiResult.data, categoryBundleApiProps.onChangeCategoryId);
    addTrashbin(categoryItems);
    
    return (
        <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
    )
}