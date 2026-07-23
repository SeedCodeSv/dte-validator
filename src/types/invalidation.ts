export interface IdentificacionInvalidacionV3 {
  version: 3;
  ambiente: '00' | '01';
  codigoGeneracion: string;
  fecEmi: string;
  horEmi: string;
  fusion: string | null;
}

export interface EmisorInvalidacionV3 {
  nit: string;
  nombre: string;
  telefono: string;
  correo: string;
  codEstable: string | null;
  codEstableMH: string;
  codPuntoVenta: string | null;
  codPuntoVentaMH: string;
}

export interface DocumentoInvalidacionV3 {
  tipoDte: string;
  codigoGeneracion: string;
  codigoGeneracionR: string | null;
  selloRecibido: string;
  numeroControl: string;
  fecEmi: string;
  tipoDocumento: string | null;
  numDocumento: string | null;
  nombre: string;
  telefono: string | null;
  correo: string | null;
}

export interface MotivoInvalidacionV3 {
  tipoAnulacion: number;
  motivoAnulacion: string;
  nombreResponsable: string;
  tipDocResponsable: string;
  numDocResponsable: string;
  nombreSolicita: string;
  tipDocSolicita: string;
  numDocSolicita: string;
}

export interface InvalidacionV3 {
  identificacion: IdentificacionInvalidacionV3;
  emisor: EmisorInvalidacionV3;
  documento: DocumentoInvalidacionV3;
  motivo: MotivoInvalidacionV3;
}

export interface ISignInvalidation {
  nit: string;
  passwordPri: string;
  dteJson: InvalidacionV3;
}