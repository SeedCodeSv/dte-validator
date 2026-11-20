import type {
  ApendiceItem,
  DocumentoRelacionadoItem,
  Direccion,
  Emisor,
  Identificacion,
  TributosItem,
  VentaTercero,
} from './fc-cf'

/** Version del esquema JSON de la nota de remision electronica (`fe-nr-v4`). */
export const NOTA_REMISION_VERSION = 4

/**
 * Identificacion de la nota de remision v4. A diferencia de `fe-nc-v4` y
 * `fe-nd-v4` no lleva `fusion`.
 */
export type NR_Identificacion = Identificacion<typeof NOTA_REMISION_VERSION, '04'>

/**
 * Receptor de nota de remision: ademas de los datos de identificacion exige el
 * titulo por el cual se remite la mercaderia (`bienTitulo`, maximo 2).
 */
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
  /** Bienes remitidos a titulo de. */
  bienTitulo: string
}

/**
 * Item de `cuerpoDocumento`: los 14 campos del esquema, sin columnas propias de
 * IVA (la nota de remision no liquida impuesto).
 */
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
  /** Codigos de tributo de 2 digitos, o `null`. */
  tributos: string[] | null
}

/** Resumen v4. `observaciones` es obligatoria dentro del bloque. */
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
  /** Maximo 3000 caracteres. En v3 vivia en `extension`. */
  observaciones: string | null
}

/**
 * Nota de Remision Electronica (tipoDte `04`, version 4).
 *
 * `fe-nr-v4.json` declara `additionalProperties: false` en todos los niveles,
 * de modo que:
 * - no existe el bloque `extension` de v3: quien entrega y quien reciben viajan
 *   en `apendice` (ver `NR_CAMPOS_ENTREGA`) y las observaciones en
 *   `resumen.observaciones`;
 * - el `emisor` no admite `tipoEstablecimiento`, `codEstableMH` ni
 *   `codPuntoVentaMH` (por eso se reusa `Emisor` de `fc-cf`);
 * - `direccion` exige `distrito` en emisor y receptor.
 */
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

/**
 * Envolvente que envia el POS al firmador. La nota de remision no lleva
 * `activo`, asi que no reusa `SVFE_Send`.
 */
export interface SVFE_NR_SEND {
  nit: string
  passwordPri: string
  dteJson: SVFE_NR
}

/**
 * Campos de `apendice` que reemplazan el viejo bloque `extension` de v3. Son el
 * contrato entre quien genera la nota y quien la vuelve a leer (PDF, alta de
 * venta): cualquier otro nombre de campo se ignora.
 */
export const NR_CAMPOS_ENTREGA = [
  'nombEntrega',
  'docuEntrega',
  'nombRecibe',
  'docuRecibe',
] as const

export type NRCampoEntrega = (typeof NR_CAMPOS_ENTREGA)[number]

/** Etiquetas legibles para cada campo de entrega (`etiqueta` admite 50 caracteres). */
export const NR_ETIQUETAS_ENTREGA: Record<NRCampoEntrega, string> = {
  nombEntrega: 'Responsable por parte del emisor',
  docuEntrega: 'N. de Documento emisor',
  nombRecibe: 'Responsable por parte del receptor',
  docuRecibe: 'N. de Documento receptor',
}
