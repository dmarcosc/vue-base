import GetClienteFactory from './getCliente/GetClienteFactory'
import LoginFactory from './login/LoginFactory'

const API = {
  getClienteRepository: GetClienteFactory.getInstance(),
  LoginRepository: LoginFactory.getInstance()
}

export default API
