import PropuestaComercialDTO from './PropuestaComercialDTO'

export default interface GetClienteDTO {
  codResultado: string;
  codigoCliente: string;
  descResultado: string;
  destino: string;
  idPeticion: string;
  indicadorContrato: string;
  propuestaComercial: PropuestaComercialDTO;
  resultado: string;
}
