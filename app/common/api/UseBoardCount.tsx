import { apiServerUrl } from "../Constants";
import { useApi } from "./UseApi";

export function useBoardCount() {
    const apiResult = useApi<number>({
        method: "GET",
        url: apiServerUrl + "/v1/board/count",
        initData: 0
    });

    return apiResult;
}