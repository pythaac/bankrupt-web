import { useState } from "react";
import { useApi } from "./UseApi";
import { apiServerUrl, Board } from "../Constants";

export function useBoard() {
    const [page, setPage] = useState<number>(1);
    const [categoryId, setCategoryId] = useState<number>(NaN);
    const [url, setUrl] = useState(apiServerUrl + "/v1/board?page=1");

    function getUrl(page: number, categoryId: number) {
        if (categoryId) {
            return apiServerUrl + "/v1/board/" + categoryId + "?page=" + page;
        } else {
            return apiServerUrl + "/v1/board?page=" + page;
        }
    }

    function onChangePage(_page: number) {
        setPage(_page);
        setUrl(getUrl(_page, categoryId));
    }

    function onChangeCategoryId(_categoryId: number) {
        setCategoryId(_categoryId)
        setUrl(getUrl(page, _categoryId));
    }

    const [boardData, boardError, boardIsLoading, boardRefetching] = useApi<Array<Board>>({
        method: "GET",
        url: url,
        initData: []
    });

    return [boardData, boardError, boardIsLoading, boardRefetching, {
        "page": page,
        "onChangePage" : onChangePage,
        "onChangeCategoryId" : onChangeCategoryId
    }];
}