import API from '@/api'
import GetCliente from './models/GetCliente'
import clientRequestDTO from '@/api/getCliente/dto/clientRequestDTO'

const executeAction = async (data: clientRequestDTO): Promise<GetCliente> => {
  try {
    const response = await API.getClienteRepository.postGetCliente(data)
    const getClienteDto = response.data

    return new GetCliente(getClienteDto)
  } catch (err) {
    console.error('[postGetCliente] - Ha ocurrido un error al llamar al GetCliente')
    throw err
  }
}

export default executeAction
