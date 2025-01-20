"use client"

import Board from "@/app/common/board/Board";
import { useBoard } from "../common/api/UseBoard";
import { useBoardCount } from "../common/api/UseBoardCount";
import { useCategory } from "../common/api/UseCategory";

export default function Body() {
    const [boardResult, boardProps] = useBoard();
    const pageState = [boardProps.page, boardProps.onChangePage];
    const categoryIdState = [boardProps.categoryId, boardProps.onChangeCategoryId];

    const countResult = useBoardCount();

    const categoryResult = useCategory();

    return (
        <Board 
            boards={boardResult.data} 
            totalCount={countResult.data}
            categories={categoryResult.data}
            pageState={pageState}
            categoryIdState={categoryIdState}
        />
    )
}