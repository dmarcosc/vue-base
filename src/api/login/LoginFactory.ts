import LoginRepositoryImpl from './impl/LoginRepositoryImpl'
import LoginRepositoryMock from './impl/LoginRepositoryMock'

export default {
  getInstance () {
    const mockAllEndpoint = process.env.VUE_APP_MOCK_ALL_ENDPOINT === 'true'
    const mockLoginEndpoint = process.env.VUE_APP_MOCK_GET_CLIENTE_ENDPOINT === 'true'

    if (mockAllEndpoint || mockLoginEndpoint) {
      return new LoginRepositoryMock()
    }
    return new LoginRepositoryImpl()
  }
}
