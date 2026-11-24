import type {
  Ambiente,
  ApendiceItem,
  Direccion,
  DocumentoRelacionadoItem,
  SVFE_Send,
  TipoContingencia,
  TipoModelo,
  TipoMoneda,
  TipoOperacion,
  TributosItem,
  VentaTercero,
} from './fc-cf'

export const NOTA_VERSION = 4

export interface NotaIdentificacion<TTipoDte extends '05' | '06'> {
  version: typeof NOTA_VERSION
  ambiente: Ambiente
  tipoDte: TTipoDte
  numeroControl: string
  codigoGeneracion: string
  tipoModelo: TipoModelo
  tipoOperacion: TipoOperacion
  tipoContingencia: TipoContingencia | null
  motivoContin: string | null
  fecEmi: string
  horEmi: string
  tipoMoneda: TipoMoneda
  fusion: string | null
}

export type NC_Identificacion = NotaIdentificacion<'05'>

export type ND_Identificacion = NotaIdentificacion<'06'>
export interface NotaEmisor {
  nit: string
  nrc: string | null
  nombre: string
  codActividad: string
  descActividad: string
  nombreComercial: string | null
  direccion: Direccion
  telefono: string
  correo: string
}

export interface NotaReceptor {
  tipoDocumento: string
  numDocumento: string
  nrc: string | null
  nombre: string
  codActividad: string
  descActividad: string
  nombreComercial: string | null
  direccion: Direccion
  telefono: string | null
  correo: string | null
}

export interface NotaCuerpoDocumentoItem {
  numItem: number
  tipoItem: number
  numeroDocumento: string
  cantidad: number
  codigo: string | null
  codTributo: string | null
  uniMedida: number
  descripcion: string
  precioUni: number
  montoDescu: number
  ventaNoSuj: number
  ventaExenta: number
  ventaGravada: number
  tributos: string[] | null
  noGravado: number
  ivaPerci: number
  totalIva: number
  ivaRete: number
}

export interface NC_Resumen {
  totalNoSuj: number
  totalExenta: number
  totalGravada: number
  subTotalVentas: number
  totalDescu: number
  tributos: TributosItem[] | null
  montoTotalOperacion: number
  ivaPerci: number
  totalIva: number
  ivaRete: number
  totalNoGravado: number
  totalPagar: number
  totalLetras: string | null
  condicionOperacion: number
  observaciones: string | null
  codigoRetencionMH: string | null
}

export interface ND_Resumen extends NC_Resumen {
  numPagoElectronico: string | null
}

export interface SVFE_NC {
  identificacion: NC_Identificacion
  documentoRelacionado: DocumentoRelacionadoItem[]
  emisor: NotaEmisor
  receptor: NotaReceptor
  ventaTercero: VentaTercero | null
  cuerpoDocumento: NotaCuerpoDocumentoItem[]
  resumen: NC_Resumen
  apendice: ApendiceItem[] | null
}

export interface SVFE_ND {
  identificacion: ND_Identificacion
  documentoRelacionado: DocumentoRelacionadoItem[]
  emisor: NotaEmisor
  receptor: NotaReceptor
  ventaTercero: VentaTercero | null
  cuerpoDocumento: NotaCuerpoDocumentoItem[]
  resumen: ND_Resumen
  apendice: ApendiceItem[] | null
}

export type SVFE_NC_SEND = SVFE_Send<SVFE_NC>

export type SVFE_ND_SEND = SVFE_Send<SVFE_ND>
