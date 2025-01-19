import { useState } from "react";
import { useApi } from "./UseApi";
import { apiServerUrl } from "../Constants";

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

export function useBoard() {
    const [page, setPage] = useState<number>(1);
    const [url, setUrl] = useState(apiServerUrl + "/v1/board?page=1");

    function changePage(page: number) {
        setPage(page);
        setUrl(apiServerUrl + "/v1/board?page=" + page);
    }

    const [boardData, boardError, boardIsLoading, boardRefetching] = useApi<Array<Board>>({
        method: "GET",
        url: url,
        initData: []
    });

    return [boardData, boardError, boardIsLoading, boardRefetching, {
        "page": page,
        "onChangePage" : changePage
    }];
}