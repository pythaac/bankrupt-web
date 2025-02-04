'use client'

import { useEffect, useState } from 'react'
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    setError(null)
    setIsLoading(true)

    await fetch(url, {
      method: method,
      ...(headers && { headers }),
      ...(body &&
        new Blob([JSON.stringify(body)], { type: 'application/json' })),
    })
      .then((response) => response.json() as T)
      .then((res) => setData(res))
      .catch((error) => {
        setError(error)
        if (!!initData) {
          setData(initData)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers, fetchData])

  return {
    data: data,
    error: error,
    isLoading: isLoading,
    refetch: fetchData,
    setInitData: () => setData(initData),
  }
}
