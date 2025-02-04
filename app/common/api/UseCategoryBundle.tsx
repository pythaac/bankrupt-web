import { useState } from 'react'
import { apiServerUrl, ICategoryBundle } from '../Constants'
import { useApi } from './UseApi'

export function useCategoryBundle(): any {
  const [url, setUrl] = useState<string>('')

  function onChangeCategoryId(categoryId: number) {
    if (!!categoryId) {
      setUrl(apiServerUrl + '/v1/category/' + categoryId + '/bundle')
    } else {
      apiResult.setInitData()
    }
  }

  const apiResult = useApi<ICategoryBundle>({
    method: 'GET',
    url: url,
    initData: [],
  })

  return [
    apiResult,
    {
      onChangeCategoryId: onChangeCategoryId,
    },
  ]
}
