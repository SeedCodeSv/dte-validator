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

/** Version del esquema JSON de las notas de crédito y debito. */
export const NOTA_VERSION = 4

/**
 * Identificacion de una nota (v4). `fe-nc-v4` y `fe-nd-v4` agregan `fusion`
 * al bloque comun de `identificacion`.
 */
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
  /** NIT del emisor fusionado (solo cuando aplica); `null` si no hay fusion. */
  fusion: string | null
}

export type NC_Identificacion = NotaIdentificacion<'05'>

export type ND_Identificacion = NotaIdentificacion<'06'>

/**
 * Emisor v4: a diferencia del CCF no lleva `codEstable`/`codPuntoVenta` ni
 * `tipoEstablecimiento`, porque el esquema no los declara.
 */
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

/** Receptor v4: exige tipo y numero de documento ademas del NRC. */
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

/** Item de `cuerpoDocumento` de una nota v4 (sin `psv` y con IVA propio). */
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

/** Resumen comun de la nota de credito v4. */
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

/** La nota de debito agrega el numero de pago electronico al resumen. */
export interface ND_Resumen extends NC_Resumen {
  numPagoElectronico: string | null
}

/** Nota de Credito (tipoDte `05`, version 4). No tiene `extension`. */
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

/** Nota de Debito (tipoDte `06`, version 4). No tiene `extension`. */
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
