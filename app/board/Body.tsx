"use client"

import Board from "@/app/common/board/Board";
import { useApi } from "../common/api/UseApi";
import { useEffect, useState } from "react";
import { apiServerUrl } from "../common/Constants";

interface Category {
    id: number,
    categoryName: string
}

interface Board {
    id: number,
    court: string,
    seller: string,
    title: string,
    uploaded: string,
    due: string,
    fileLink: string,
    telephoneNumber: string,
    categories: Array<Category>
}

export default function Body() {
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState(apiServerUrl + "/v1/board?page=1");
    const [categoryId, setCategoryId] = useState<number>(NaN);

    const [countData, countError, countIsLoading] = useApi<number>({
        method: "GET",
        url: apiServerUrl + "/v1/board/count",
        initData: 0
    });
    const [boardData, boardError, boardIsLoading] = useApi<Array<Board>>({
        method: "GET",
        url: url,
        initData: []
    });
    const [categoryData, categoryError, categoryIsLoading] = useApi<Array<Category>>({
        method: "GET",
        url: apiServerUrl + "/v1/category",
        initData: []
    });

    useEffect(() => {
        if (categoryId) {
            setUrl(apiServerUrl + "/v1/board/" + {categoryId} + "?page=" + page);
        } else {
            setUrl(apiServerUrl + "/v1/board?page=" + page);
        }
    }, [page, categoryId]);
        

    return (
        <Board 
            boards={boardData} 
            totalCount={countData} 
            pageState={[page, setPage]}
        />
    )
}