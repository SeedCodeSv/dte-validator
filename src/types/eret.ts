import type {
  Ambiente,
  ApendiceItem,
  SVFE_Send,
  TipoContingencia,
  TipoModelo,
  TipoMoneda,
  TipoOperacion,
  TributosItem,
} from './fc-cf'

/**
 * Evento de Retorno (tipoDte `18`, versión 1).
 * Esquema oficial: `fe-eret-v1.json`.
 */

/** Tipo de evento del Evento de Retorno. */
export type TipoEvento = '18'

export interface ERET_Identificacion {
  version: 1
  ambiente: Ambiente
  tipoModelo: TipoModelo
  tipoOperacion: TipoOperacion
  /** Siempre `'18'`: Evento de Retorno. */
  tipoEvento: TipoEvento
  tipoContingencia: TipoContingencia | null
  motivoContin: string | null
  codigoGeneracion: string
  fecEmi: string
  horEmi: string
  fusion: string | null
  tipoMoneda: TipoMoneda
}

export interface ERET_DocumentoRelacionadoItem {
  tipoDocumento: string
  codigoGeneracion: string
  fechaEmision: string
}

export interface ERET_Emisor {
  nit: string
  nombre: string
  codEstableMH: string
  codEstable: string | null
  codPuntoVentaMH: string
  codPuntoVenta: string | null
  recintoFiscal: string | null
  tipoRegimen: string | null
  regimen: string | null
  tipoItemExpor: number | null
}

export interface ERET_Documento {
  tipoDocumento: string | null
  numDocumento: string | null
  nombre: string | null
  codPais: string | null
  nombrePais: string | null
  telefono: string | null
  correo: string | null
}

export interface ERET_VentaTercero {
  nit: string | null
  nombre: string | null
  codDomiciliado: number | null
}

export interface ERET_CompraTercero {
  numDocumento: string | null
  nombre: string | null
}

export interface ERET_CuerpoDocumentoItem {
  numItem: number
  tipoItem: number
  codigoGeneracion: string
  cantidad: number
  precioUni: number
  descripcion: string
  codigo: string | null
  uniMedida: number
  montoDescu: number
  codTributo: string | null
  ventaNoSuj: number
  ventaExenta: number
  ventaGravada: number
  compra: number
  tributos: string[] | null
  psv: number
  ivaItem: number
  noGravado: number
  seguro: number
  flete: number
  ivaRete: number
  reteRenta: number
}

export interface ERET_Resumen {
  totalNoSuj: number
  totalExenta: number
  totalGravada: number
  totalCompraExcluidos: number
  subTotalVentas: number
  tributos: TributosItem[] | null
  totalSeguro: number | null
  totalFlete: number | null
  montoTotalOperacion: number
  ivaRete: number
  reteRenta: number | null
  totalNoGravado: number
  totalPagar: number
  totalLetras: string | null
  totalNoOnerosas: number
  totalIva: number
  saldoFavor: number
}

/**
 * El esquema oficial admite `ventaTercero` o `compraTercero`, pero nunca ambos:
 * solo uno puede venir informado, o los dos en `null`.
 */
export type ERET_Terceros =
  | { ventaTercero: ERET_VentaTercero; compraTercero: null }
  | { ventaTercero: null; compraTercero: ERET_CompraTercero }
  | { ventaTercero: null; compraTercero: null }

export interface ERET_DocumentoBase {
  identificacion: ERET_Identificacion
  documentoRelacionado: ERET_DocumentoRelacionadoItem[]
  emisor: ERET_Emisor
  documento: ERET_Documento | null
  cuerpoDocumento: ERET_CuerpoDocumentoItem[]
  resumen: ERET_Resumen
  apendice: ApendiceItem[] | null
}

/** Evento de Retorno (tipoDte `18`, versión 1). No tiene `receptor` ni `extension`. */
export type SVFE_ERET = ERET_DocumentoBase & ERET_Terceros

export type SVFE_ERET_SEND = SVFE_Send<SVFE_ERET>
