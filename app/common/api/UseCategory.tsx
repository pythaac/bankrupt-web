import { apiServerUrl, Category } from "../Constants";
import { useApi } from "./UseApi";

export function useCategory() {
    
    const [categoryData, categoryError, categoryIsLoading, categoryRefetch] = useApi<Array<Category>>({
        method: "GET",
        url: apiServerUrl + "/v1/category",
        initData: []
    });

    return [categoryData, categoryError, categoryIsLoading, categoryRefetch];
}