import GetClienteRepositoryImpl from './impl/GetClienteRepositoryImpl'
import GetClienteRepositoryMock from './impl/GetClienteRepositoryMock'

export default {
  getInstance () {
    const mockAllEndpoint = process.env.VUE_APP_MOCK_ALL_ENDPOINT === 'false'
    const mockGetClienteEndpoint = process.env.VUE_APP_MOCK_GET_CLIENTE_ENDPOINT === 'false'

    if (mockAllEndpoint || mockGetClienteEndpoint) {
      return new GetClienteRepositoryMock()
    }
    return new GetClienteRepositoryImpl()
  }
}
