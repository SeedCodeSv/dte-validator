import type {
  ApendiceItem,
  DocumentoRelacionadoItem,
  Direccion,
  Emisor,
  Identificacion,
  TributosItem,
  VentaTercero,
} from './fc-cf'

export const NOTA_REMISION_VERSION = 4

export type NR_Identificacion = Identificacion<typeof NOTA_REMISION_VERSION, '04'>
export interface NR_Receptor {
  tipoDocumento: string
  numDocumento: string
  nrc: string | null
  nombre: string
  codActividad: string
  descActividad: string
  nombreComercial: string | null
  direccion: Direccion | null
  telefono: string | null
  correo: string | null
  bienTitulo: string
}
export interface NR_CuerpoDocumentoItem {
  numItem: number
  tipoItem: number
  numeroDocumento: string | null
  codigo: string | null
  codTributo: string | null
  descripcion: string
  cantidad: number
  uniMedida: number
  precioUni: number
  montoDescu: number
  ventaNoSuj: number
  ventaExenta: number
  ventaGravada: number
  tributos: string[] | null
}

export interface NR_Resumen {
  totalNoSuj: number
  totalExenta: number
  totalGravada: number
  subTotalVentas: number
  descuNoSuj: number
  descuExenta: number
  descuGravada: number
  porcentajeDescuento: number
  totalDescu: number
  tributos: TributosItem[] | null
  subTotal: number
  montoTotalOperacion: number
  totalLetras: string | null
  observaciones: string | null
}

export interface SVFE_NR {
  identificacion: NR_Identificacion
  documentoRelacionado: DocumentoRelacionadoItem[] | null
  emisor: Emisor
  receptor: NR_Receptor
  ventaTercero: VentaTercero | null
  cuerpoDocumento: NR_CuerpoDocumentoItem[]
  resumen: NR_Resumen
  apendice: ApendiceItem[] | null
}
export interface SVFE_NR_SEND {
  nit: string
  passwordPri: string
  dteJson: SVFE_NR
}

export const NR_CAMPOS_ENTREGA = [
  'nombEntrega',
  'docuEntrega',
  'nombRecibe',
  'docuRecibe',
] as const

export type NRCampoEntrega = (typeof NR_CAMPOS_ENTREGA)[number]

export const NR_ETIQUETAS_ENTREGA: Record<NRCampoEntrega, string> = {
  nombEntrega: 'Responsable por parte del emisor',
  docuEntrega: 'N. de Documento emisor',
  nombRecibe: 'Responsable por parte del receptor',
  docuRecibe: 'N. de Documento receptor',
}
