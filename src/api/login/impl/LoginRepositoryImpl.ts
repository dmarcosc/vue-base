import { xhr } from '@/api/config/repository'
import { AxiosResponse } from 'axios'
import LoginRepository from '../LoginRepository'
import LoginResponseDTO from '../dto/LoginResponseDTO'
import LoginRequestDTO from '../dto/LoginRequestDTO'

export default class LoginRepositoryImpl implements LoginRepository {
  postLogin (data: LoginRequestDTO): Promise<AxiosResponse<string>> {
    const url = 'http://localhost:8081/master-data/api/login'

    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, UPDATE',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }

    const params = {
      email: data.email,
      password: data.password
    }

    return xhr.post(url, params, { headers })
  }
}
