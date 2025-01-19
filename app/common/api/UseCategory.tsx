import { apiServerUrl, Category } from "../Constants";
import { useApi } from "./UseApi";

export function useCategory() {
    
    const apiResult = useApi<Array<Category>>({
        method: "GET",
        url: apiServerUrl + "/v1/category",
        initData: []
    });

    return apiResult;
}