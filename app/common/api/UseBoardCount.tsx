import { useState } from 'react'
import { apiServerUrl } from '../Constants'
import { useApi } from './UseApi'

export function useBoardCount(): any {
  const [categoryId, setCategoryId] = useState<number>(NaN)
  const [url, setUrl] = useState(apiServerUrl + '/v1/board/count')

  function getUrl(categoryId: number) {
    if (categoryId) {
      return apiServerUrl + '/v1/board/count?categoryId=' + categoryId
    } else {
      return apiServerUrl + '/v1/board/count'
    }
  }

  function onChangeCategoryId(_categoryId: number) {
    setCategoryId(_categoryId)
    setUrl(getUrl(_categoryId))
  }

  const apiResult = useApi<number>({
    method: 'GET',
    url: url,
    initData: 0,
  })

  return [
    apiResult,
    {
      categoryId: categoryId,
      onChangeCategoryId: onChangeCategoryId,
    },
  ]
}
