import { useState } from "react";
import { apiServerUrl, ICategoryBundle, ICategoryResource } from "../Constants";
import { useApi } from "./UseApi";

export function useCategoryBundle(): any {
    const [url, setUrl] = useState<string>("");

    function onChangeCategoryId(categoryId: number) {
        setUrl(apiServerUrl + "/v1/category/" + categoryId + "/bundle");
    }
    
    const apiResult = useApi<ICategoryBundle>({
        method: "GET",
        url: url,
        initData: []
    });

    return [apiResult, {
        "onChangeCategoryId": onChangeCategoryId
    }];
}