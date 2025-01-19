import { apiServerUrl } from "../Constants";
import { useApi } from "./UseApi";

export function useBoardCount() {
    const [countData, countError, countIsLoading, countRefetch] = useApi<number>({
        method: "GET",
        url: apiServerUrl + "/v1/board/count",
        initData: 0
    });

    return [countData, countError, countIsLoading, countRefetch];
}