"use client"

import Board from "@/app/common/board/Board";
import { useBoard } from "../common/api/UseBoard";
import { useBoardCount } from "../common/api/UseBoardCount";
import { useCategory } from "../common/api/UseCategory";

export default function Body() {
    const [boardResult, boardProps] = useBoard();
    const pageState = [boardProps.page, boardProps.onChangePage];

    const [countResult, countProps] = useBoardCount();

    const categoryResult = useCategory();

    function onChangeCategoryId(categoryId: number) {
        boardProps.onChangeCategoryId(categoryId);
        countProps.onChangeCategoryId(categoryId);
    }

    return (
        <Board 
            boards={boardResult.data} 
            totalCount={countResult.data}
            categories={categoryResult.data}
            pageState={pageState}
            categoryIdState={[boardProps.categoryId, onChangeCategoryId]}
        />
    )
}