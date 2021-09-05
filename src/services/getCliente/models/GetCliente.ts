import clientResponseDTO from '@/api/getCliente/dto/clientResponseDTO'

export default class GetCliente {
  nSeguridadSocial: string;
  direccion: string;
  edad: number;
  nacionalidad: string;

  constructor (getCliente: clientResponseDTO) {
    this.nSeguridadSocial = getCliente.nSeguridadSocial
    this.direccion = getCliente.direccion
    this.edad = getCliente.edad
    this.nacionalidad = getCliente.nacionalidad
  }
}
