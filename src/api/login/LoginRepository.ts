import { AxiosResponse } from 'axios'
import LoginResponseDTO from '@/api/login/dto/LoginResponseDTO'
import LoginRequestDTO from '@/api/login/dto/LoginRequestDTO'

export default interface LoginRepository {
  postLogin(data: LoginRequestDTO): Promise<AxiosResponse<string>>;
}
