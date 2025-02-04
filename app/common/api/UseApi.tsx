'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'
import { IApiResult } from '../Constants'

export function useApi<T>({
  method,
  url,
  initData,
  body,
  headers,
}: {
  method: string
  url: string
  initData?: any
  body?: any
  headers?: any
}): IApiResult<T> {
  const [data, setData] = useState<T>(initData)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // 객체 값들을 useMemo로 감싸서 참조값 유지
  const memoizedBody = useMemo(() => body, [JSON.stringify(body)]) // JSON.stringify로 비교
  const memoizedHeaders = useMemo(() => headers, [JSON.stringify(headers)])
  const memoizedInitData = useMemo(() => initData, [JSON.stringify(initData)])

  const fetchData = useCallback(async () => {
    setError(null)
    setIsLoading(true)

    await fetch(url, {
      method: method,
      ...(memoizedHeaders && { headers: memoizedHeaders }),
      ...(memoizedBody && { body: JSON.stringify(memoizedBody) }),
    })
      .then((response) => response.json() as T)
      .then((res) => setData(res))
      .catch((error) => {
        setError(error)
        if (!!memoizedInitData) {
          setData(memoizedInitData)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url, method, memoizedHeaders, memoizedBody, memoizedInitData]) // 의존성 배열에서 메모이제이션된 값 사용

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data: data,
    error: error,
    isLoading: isLoading,
    refetch: fetchData,
    setInitData: () => setData(initData),
  }
}
