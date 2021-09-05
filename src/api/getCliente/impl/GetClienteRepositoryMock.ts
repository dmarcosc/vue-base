import { AxiosResponse } from 'axios'
import ClientResponseDTO from '../dto/clientResponseDTO'
import ClientRequestDTO from '../dto/ClientRequestDTO'
import GetClienteRepository from '../GetClienteRepository'
import GetClienteDTOJSON from '@/assets/mock/getCliente.json'
import { axiosResponse200 } from '@/api/utils/mockUtils'

export default class GetClienteDTORepositoryMock implements GetClienteRepository {
  postGetCliente (data: ClientRequestDTO): Promise<AxiosResponse<ClientResponseDTO>> {
    const response: ClientResponseDTO = GetClienteDTOJSON

    return axiosResponse200(response)
  }
}
