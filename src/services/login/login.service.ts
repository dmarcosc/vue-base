import API from '@/api'
import Login from './models/Login'
import LoginRequestDTO from '@/api/login/dto/LoginRequestDTO'
import LoginResponseDTO from '@/api/login/dto/LoginResponseDTO'

const executeAction = async (data: LoginRequestDTO): Promise<Login> => {
  try {
    const response = await API.LoginRepository.postLogin(data)
    const loginDto = response.data

    return new Login(loginDto)
  } catch (err) {
    console.error('[postLogin] - Ha ocurrido un error al llamar al Login')
    throw err
  }
}

export default executeAction
