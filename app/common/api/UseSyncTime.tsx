import { apiServerUrl, ISyncTime } from '../Constants'
import { useApi } from './UseApi'

export function useSyncTime() {
  const apiResult = useApi<ISyncTime>({
    method: 'GET',
    url: apiServerUrl + '/v1/sync/time',
    initData: undefined,
  })

  return apiResult
}
