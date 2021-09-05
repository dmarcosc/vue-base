import { AxiosResponse } from 'axios'
import LoginResponseDTO from '../dto/LoginResponseDTO'
import LoginRequestDTO from '../dto/LoginRequestDTO'
import LoginRepository from '../LoginRepository'
import LoginDTOJSON from '@/assets/mock/login.json'
import { axiosResponse200 } from '@/api/utils/mockUtils'

export default class GetClienteDTORepositoryMock implements LoginRepository {
  postLogin (data: LoginRequestDTO): Promise<AxiosResponse<string>> {
    const response: LoginRequestDTO = LoginDTOJSON

    return axiosResponse200(response)
  }
}
