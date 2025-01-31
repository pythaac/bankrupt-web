import { useState } from "react";
import { useApi } from "./UseApi";
import { apiServerUrl, IBoard } from "../Constants";

export function useBoard(): any {
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
        setUrl(getUrl(1, _categoryId));
        setPage(1);
    }

    const apiResult = useApi<Array<IBoard>>({
        method: "GET",
        url: url,
        initData: []
    });

    return [apiResult, {
        "page": page,
        "onChangePage" : onChangePage,
        "categoryId": categoryId,
        "onChangeCategoryId" : onChangeCategoryId
    }];
}