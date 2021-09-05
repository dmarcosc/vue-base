import { AxiosResponse } from 'axios'
import ClientResponseDTO from '@/api/getCliente/dto/clientResponseDTO'
import ClientRequestDTO from '@/api/getCliente/dto/ClientRequestDTO'

export default interface GetClienteRepository {
  postGetCliente(data: ClientRequestDTO): Promise<AxiosResponse<ClientResponseDTO>>;
}
