import { AxiosResponse } from 'axios'

export const axiosResponse200 = (data: any): Promise<AxiosResponse<any>> => {
  const response = {
    status: 200,
    data,
    statusText: '200',
    headers: {},
    config: {}
  }

  return Promise.resolve(response)
}
