
import type {
  ApendiceItem,
  Direccion,
  EmisorDireccion,
  Identificacion,
  PagosItem,
  SVFE_Send,
} from './fc-cf';

export interface FSE_Emisor {
  nit: string;
  nrc: string;
  nombre: string;
  codActividad: string;
  descActividad: string;
  direccion: EmisorDireccion;
  telefono: string;
  correo: string;
  codEstable: string | null;
  codPuntoVenta: string | null;
}

export interface FSE_Receptor {
  tipoDocumento: string;
  numDocumento: string;
  nombre: string;
  codActividad: string | null;
  descActividad: string | null;
  direccion: Direccion;
  telefono: string | null;
  correo: string | null;
}

export interface FSE_CuerpoDocumentoItems {
  numItem: number;
  tipoItem: number;
  cantidad: number;
  codigo: string | null;
  uniMedida: number;
  descripcion: string;
  precioUni: number;
  montoDescu: number;
  compra: number;
}

export interface FSE_Resumen {
  totalCompra: number;
  descu: number;
  totalDescu: number;
  subTotal: number;
  reteRenta: number;
  totalPagar: number;
  totalLetras: string;
  condicionOperacion: number;
  pagos: PagosItem[] | null;
  observaciones: string | null;
}

export interface SVFE_FSE {
  identificacion: Identificacion<2>;
  emisor: FSE_Emisor;
  receptor: FSE_Receptor;
  cuerpoDocumento: FSE_CuerpoDocumentoItems[];
  resumen: FSE_Resumen;
  apendice: ApendiceItem[] | null;
}

export type SVFE_FSE_SEND = SVFE_Send<SVFE_FSE>;
