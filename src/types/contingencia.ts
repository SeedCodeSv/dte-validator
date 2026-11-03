import type { Ambiente, SVFE_Send } from './fc-cf';

/**
 * Evento de Contingencia (versión 4).
 * Esquema oficial: `contingencia-schema-v4.json`.
 *
 * El emisor no admite `codPuntoVenta`: solo `codEstableMH` y `codPuntoVentaMH`
 * (ambos obligatorios, aunque admiten `null`).
 */

export interface ContingenciaIdentificacion {
  version: 4;
  ambiente: Ambiente;
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
  codEstableMH: string | null;
  codPuntoVentaMH: string | null;
  telefono: string;
  correo: string;
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
  motivoContingencia: string | null;
}

export interface SVFE_Contingencia {
  identificacion: ContingenciaIdentificacion;
  emisor: ContingenciaEmisor;
  detalleDTE: ContingenciaDetalleDTEItem[];
  motivo: ContingenciaMotivo;
}

export type SVFE_Contingencia_SEND = SVFE_Send<SVFE_Contingencia>;
