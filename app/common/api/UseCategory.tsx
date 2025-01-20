import { apiServerUrl, ICategory } from "../Constants";
import { useApi } from "./UseApi";

export function useCategory() {
    
    const apiResult = useApi<Array<ICategory>>({
        method: "GET",
        url: apiServerUrl + "/v1/category",
        initData: []
    });

    return apiResult;
}