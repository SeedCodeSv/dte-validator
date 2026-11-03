
export type Ambiente = '00' | '01'

export type TipoModelo = 1 | 2

export type TipoOperacion = 1 | 2

export type TipoContingencia = 1 | 2 | 3 | 4 | 5

export type TipoDte =
  | '01'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '11'
  | '14'
  | '15'
  | '17'
  | '18'

export type TipoMoneda = 'USD'
export interface Direccion {
  departamento: string
  municipio: string
  distrito: string
  complemento: string
}

export interface Identificacion<
  TVersion extends number = number,
  TTipoDte extends TipoDte = TipoDte,
> {
  version: TVersion
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
}

/** Emisor de factura y CCF (no admite `tipoEstablecimiento` ni `codEstableMH`). */
export interface Emisor {
  nit: string
  nrc: string
  nombre: string
  codActividad: string
  descActividad: string
  nombreComercial: string | null
  direccion: Direccion
  telefono: string
  correo: string
  codEstable: string | null
  codPuntoVenta: string | null
}

export interface DocumentoRelacionadoItem {
  tipoDocumento: string
  tipoGeneracion: number
  numeroDocumento: string
  fechaEmision: string
}

/** Datos del médico que presta el servicio (documento asociado tipo 4). */
export interface OtrosDocumentosMedico {
  nombre: string | null
  nit: string | null
  docIdentificacion: string | null
  tipoServicio: number | null
}

export interface OtrosDocumentosItem {
  codDocAsociado: number | null
  descDocumento: string | null
  detalleDocumento: string | null
  medico: OtrosDocumentosMedico | null
}

/** Venta por cuenta de terceros: es un objeto, no un arreglo. */
export interface VentaTercero {
  nit: string | null
  nombre: string
  codDomiciliado: number | null
}

export interface TributosItem {
  codigo: string
  descripcion: string
  valor: number
}

export interface PagosItem {
  codigo: string | null
  montoPago: number
  referencia: string | null
  plazo: string | null
  periodo: number | null
}

export interface ApendiceItem {
  campo: string
  etiqueta: string
  valor: string
}

export interface FC_Receptor {
  tipoDocumento: string | null
  numDocumento: string | null
  nrc: string | null
  nombre: string | null
  codActividad: string | null
  descActividad: string | null
  direccion: Direccion | null
  telefono: string | null
  correo: string | null
}

export interface FC_CuerpoDocumentoItems {
  numItem: number
  tipoItem: number
  numeroDocumento: string | null
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
  psv: number
  noGravado: number
  ivaItem: number
}

export interface FC_Resumen {
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
  ivaRete: number
  montoTotalOperacion: number
  totalNoGravado: number
  totalPagar: number
  totalLetras: string | null
  totalIva: number
  saldoFavor: number
  condicionOperacion: number
  pagos: PagosItem[] | null
  numPagoElectronico: string | null
  observaciones: string | null
}

/** Factura Electrónica (tipoDte `01`, versión 2). No tiene `extension`. */
export interface SVFE_FC {
  identificacion: Identificacion<2, '01'>
  emisor: Emisor
  receptor: FC_Receptor | null
  otrosDocumentos: OtrosDocumentosItem[] | null
  ventaTercero: VentaTercero | null
  documentoRelacionado: DocumentoRelacionadoItem[] | null
  cuerpoDocumento: FC_CuerpoDocumentoItems[]
  resumen: FC_Resumen
  apendice: ApendiceItem[] | null
}

export interface CF_Receptor {
  nit: string
  nrc: string | null
  codActividad: string
  descActividad: string
  nombreComercial: string | null
  nombre: string
  direccion: Direccion
  telefono: string | null
  correo: string | null
}

export interface CF_CuerpoDocumentoItems {
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
  psv: number
  noGravado: number
}

export interface CF_Resumen {
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
  ivaPerci: number
  ivaRete: number
  montoTotalOperacion: number
  totalNoGravado: number
  totalPagar: number
  totalLetras: string | null
  saldoFavor: number
  condicionOperacion: number
  pagos: PagosItem[] | null
  numPagoElectronico: string | null
  observaciones: string | null
}

/** Comprobante de Crédito Fiscal (tipoDte `03`, versión 4). No tiene `extension`. */
export interface SVFE_CF {
  identificacion: Identificacion<4, '03'>
  emisor: Emisor
  receptor: CF_Receptor
  otrosDocumentos: OtrosDocumentosItem[] | null
  ventaTercero: VentaTercero | null
  documentoRelacionado: DocumentoRelacionadoItem[] | null
  cuerpoDocumento: CF_CuerpoDocumentoItems[]
  resumen: CF_Resumen
  apendice: ApendiceItem[] | null
}

export interface SVFE_Send<TDte> {
  nit: string
  activo: boolean
  passwordPri: string
  dteJson: TDte
}

export type SVFE_FC_SEND = SVFE_Send<SVFE_FC>

export interface SVFE_CF_SEND extends SVFE_Send<SVFE_CF> {
  codigoGeneracion?: string
}

export type SVFE_SendAny = SVFE_FC_SEND | SVFE_CF_SEND
