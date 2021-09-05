import loginResponseDTO from '@/api/login/dto/loginResponseDTO'

export default class Login {
  token: string

  constructor (token: string) {
    this.token = token
  }
}
