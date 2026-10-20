export interface Direccion {
  departamento: string;
  municipio: string;
  complemento: string;
}

export interface EmisorDireccion extends Direccion {
  distrito: string;
}


export interface Identificacion<TVersion extends number = number> {
  version: TVersion;
  ambiente: string;
  tipoDte: string;
  numeroControl: string;
  codigoGeneracion: string;
  tipoModelo: number;
  tipoOperacion: number;
  tipoContingencia: number | null;
  motivoContin: string | null;
  fecEmi: string;
  horEmi: string;
  tipoMoneda: string;
}

export interface Emisor {
  nit: string;
  nrc: string;
  nombre: string;
  codActividad: string;
  descActividad: string;
  nombreComercial: string;
  direccion: EmisorDireccion;
  telefono: string;
  correo: string;
  codEstable: string | null;
  codPuntoVenta: string | null;
}

export interface DocumentoRelacionadoItem {
  tipoDocumento: string;
  tipoGeneracion: number;
  numeroDocumento: string;
  fechaEmision: string;
}

export interface OtrosDocumentosItem {
  codDocAsociado: number;
  descDocumento: string;
  detalleDocumento: string;
  medico: {
    nombre: string;
    nit: string | null;
    docIdentificacion: string;
    tipoServicio: number;
  } | null;
}

export interface VentaTercerosItem {
  nit: string;
  nombre: string;
}

export interface TributosItem {
  codigo: string;
  descripcion: string;
  valor: number;
}

export interface PagosItem {
  codigo: string;
  montoPago: number;
  referencia: string | null;
  plazo: string | null;
  periodo: number | null;
}

export interface Extension {
  nombEntrega: string | null;
  docuEntrega: string | null;
  nombRecibe: string | null;
  docuRecibe: string | null;
  observaciones: string | null;
  placaVehiculo: string | null;
}

export interface ApendiceItem {
  campo: string;
  etiqueta: string;
  valor: string;
}

export interface FC_Receptor {
  tipoDocumento: string | null;
  numDocumento: string | null;
  nrc: string | null;
  nombre: string | null;
  codActividad: string | null;
  descActividad: string | null;
  direccion: Direccion | null;
  telefono: string | null;
  correo: string | null;
}

export interface FC_CuerpoDocumentoItems {
  numItem: number;
  tipoItem: number;
  numeroDocumento: string | null;
  cantidad: number;
  codigo: string | null;
  codTributo: string | null;
  uniMedida: number;
  descripcion: string;
  precioUni: number;
  montoDescu: number;
  ventaNoSuj: number;
  ventaExenta: number;
  ventaGravada: number;
  tributos: string[] | null;
  psv: number;
  noGravado: number;
  ivaItem: number;
}

export interface FC_Resumen {
  totalNoSuj: number;
  totalExenta: number;
  totalGravada: number;
  subTotalVentas: number;
  descuNoSuj: number;
  descuExenta: number;
  descuGravada: number;
  porcentajeDescuento: number;
  totalDescu: number;
  tributos: TributosItem[] | null;
  subTotal: number;
  ivaRete: number;
  montoTotalOperacion: number;
  totalNoGravado: number;
  totalPagar: number;
  totalLetras: string;
  totalIva: number;
  saldoFavor: number;
  condicionOperacion: number;
  pagos: PagosItem[] | null;
  numPagoElectronico: string | null;
  observaciones: string | null;
}

export interface SVFE_FC {
  identificacion: Identificacion<2>;
  emisor: Emisor;
  receptor: FC_Receptor;
  otrosDocumentos: OtrosDocumentosItem[] | null;
  ventaTercero: VentaTercerosItem[] | null;
  documentoRelacionado: DocumentoRelacionadoItem[] | null;
  cuerpoDocumento: FC_CuerpoDocumentoItems[];
  resumen: FC_Resumen;
  extension?: Extension[] | null;
  apendice: ApendiceItem[] | null;
}

export interface CF_Receptor {
  nit: string;
  nrc: string;
  codActividad: string;
  descActividad: string;
  nombreComercial: string | null;
  nombre: string;
  direccion: Direccion;
  telefono: string | null;
  correo: string;
}

export interface CF_CuerpoDocumentoItems {
  numItem: number;
  tipoItem: number;
  numeroDocumento: string | null;
  codigo: string | null;
  codTributo: string | null;
  descripcion: string;
  cantidad: number;
  uniMedida: number;
  precioUni: number;
  montoDescu: number;
  ventaNoSuj: number;
  ventaExenta: number;
  ventaGravada: number;
  tributos: string[] | null;
  psv: number;
  noGravado: number;
}

export interface CF_Resumen {
  totalNoSuj: number;
  totalExenta: number;
  totalGravada: number;
  subTotalVentas: number;
  descuNoSuj: number;
  descuExenta: number;
  descuGravada: number;
  porcentajeDescuento: number;
  totalDescu: number;
  tributos: TributosItem[] | null;
  subTotal: number;
  ivaPerci: number;
  ivaRete: number;
  montoTotalOperacion: number;
  totalNoGravado: number;
  totalPagar: number;
  totalLetras: string;
  saldoFavor: number;
  condicionOperacion: number;
  pagos: PagosItem[] | null;
  numPagoElectronico: string | null;
  observaciones: string | null;
}

export interface SVFE_CF {
  /** CCF usa versión 4 (ver cabecera del archivo). */
  identificacion: Identificacion<4>;
  emisor: Emisor;
  receptor: CF_Receptor;
  otrosDocumentos: OtrosDocumentosItem[] | null;
  ventaTercero: VentaTercerosItem[] | null;
  documentoRelacionado: DocumentoRelacionadoItem[] | null;
  cuerpoDocumento: CF_CuerpoDocumentoItems[];
  resumen: CF_Resumen;
  extension?: Extension[] | null;
  apendice: ApendiceItem[] | null;
}

export interface SVFE_Send<TDte> {
  nit: string;
  activo: boolean;
  passwordPri: string;
  dteJson: TDte;
}

export type SVFE_FC_SEND = SVFE_Send<SVFE_FC>;

export interface SVFE_CF_SEND extends SVFE_Send<SVFE_CF> {
  codigoGeneracion?: string;
}

export type SVFE_SendAny = SVFE_FC_SEND | SVFE_CF_SEND;
