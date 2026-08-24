export interface SearchDtePayload {
  nitEmisor: string;
  tdte: string;
  codigoGeneracion: string;
}

export interface SearchDteResponse {
  version: number;
  ambiente: string;
  versionApp: number;
  estado: string;
  codigoGeneracion: string;
  selloRecibido: string;
  fhProcesamiento: string;
  clasificaMsg: string;
  codigoMsg: string;
  descripcionMsg: string;
  observaciones: string[];
}
