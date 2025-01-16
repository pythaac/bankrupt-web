import { useEffect, useState } from "react";

export function useApi<T>(
    {method, url, initData, body, headers}: 
    {method: string, url: string, initData?: any, body?: any, headers?: any}
) {
    const [data, setData] = useState(initData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setError(null);
        setIsLoading(true);

        try {
            await fetch(url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            })
            .then((response) => setData(response.json() as T));
        } catch (error: any) {
            setError(error);
            {initData ? setData(initData) : undefined}
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return [data, error, isLoading];
}