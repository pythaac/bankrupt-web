import { useState } from 'react'
import { useApi } from './UseApi'
import { apiServerUrl, IBoard } from '../Constants'

export function useBoard(): any {
  const [page, setPage] = useState<number>(1)
  const [categoryId, setCategoryId] = useState<number>(NaN)
  const [pageSize, setPageSize] = useState<number>(5)
  const [url, setUrl] = useState(apiServerUrl + '/v1/board?page=1')

  function getUrl(page: number, categoryId: number, pageSize: number) {
    if (categoryId) {
      return `${apiServerUrl}/v1/board/${categoryId}?page=${page}&size=${pageSize}`
    } else {
      return `${apiServerUrl}/v1/board?page=${page}&size=${pageSize}`
    }
  }

  function onChangePage(_page: number) {
    setPage(_page)
    setUrl(getUrl(_page, categoryId, pageSize))
  }

  function onChangeCategoryId(_categoryId: number) {
    setCategoryId(_categoryId)
    setUrl(getUrl(1, _categoryId, pageSize))
    setPage(1)
  }

  function onChangePageSize(_pageSize: number) {
    setPageSize(_pageSize)
    setUrl(getUrl(1, categoryId, _pageSize))
    setPage(1)
  }

  const apiResult = useApi<Array<IBoard>>({
    method: 'GET',
    url: url,
    initData: [],
  })

  return [
    apiResult,
    {
      page: page,
      onChangePage: onChangePage,
      categoryId: categoryId,
      onChangeCategoryId: onChangeCategoryId,
      pageSize: pageSize,
      onChangePageSize: onChangePageSize,
    },
  ]
}
