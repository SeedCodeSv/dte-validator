import type { SVFE_Send } from './fc-cf';

export interface ContingenciaIdentificacion {
  version: 3 | 4;
  ambiente: string;
  codigoGeneracion: string;
  fTransmision: string;
  hTransmision: string;
}

export interface ContingenciaEmisor {
  nit: string;
  nombre: string;
  nombreResponsable: string;
  tipoDocResponsable: string;
  numeroDocResponsable: string;
  tipoEstablecimiento: string;
  telefono: string;
  correo: string;
  codEstableMH: string | null;
  codPuntoVentaMH?: string | null;
  codPuntoVenta?: string | null;
}

export interface ContingenciaDetalleDTEItem {
  noItem: number;
  codigoGeneracion: string;
  tipoDoc: string;
}

export interface ContingenciaMotivo {
  fInicio: string;
  fFin: string;
  hInicio: string;
  hFin: string;
  tipoContingencia: number;
  motivoContingencia?: string | null;
}

export interface SVFE_Contingencia {
  identificacion: ContingenciaIdentificacion;
  emisor: ContingenciaEmisor;
  detalleDTE: ContingenciaDetalleDTEItem[];
  motivo: ContingenciaMotivo;
}

export type SVFE_Contingencia_SEND = SVFE_Send<SVFE_Contingencia>;
