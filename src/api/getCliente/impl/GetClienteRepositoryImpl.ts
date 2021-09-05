import { xhr } from '@/api/config/repository'
import { AxiosResponse } from 'axios'
import GetClienteRepository from '../GetClienteRepository'
import ClientResponseDTO from '../dto/clientResponseDTO'
import ClientRequestDTO from '../dto/clientRequestDTO'

export default class GetClienteRepositoryImpl implements GetClienteRepository {
  postGetCliente (data: ClientRequestDTO): Promise<AxiosResponse<ClientResponseDTO>> {
    const url = 'http://localhost:8081/master-data/api/client'

    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, UPDATE',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }

    const params = {
      email: data.email
    }

    return xhr.post(url, params, { headers })
  }
}
