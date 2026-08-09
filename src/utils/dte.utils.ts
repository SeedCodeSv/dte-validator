/**
 * Genera un número de control para DTE
 * @param dteCode - Tipo de DTE (01, 03, 05, 06, 14)
 * @param codStable - Código de establecimiento
 * @param codPVenta - Código de punto de venta
 * @param nTicket - Número de ticket
 * @returns Número de control formateado
 */
export function generateControl(
  dteCode: string,
  codStable: string,
  codPVenta: string,
  nTicket: string,
): string {
  return `DTE-${dteCode}-${codStable + codPVenta}-${nTicket}`;
}

/**
 * Retorna el código de tipo de DTE según el tipo de voucher
 * @param dteType - Tipo de dte (FE, CCFE, NCE, NDE, FSE)
 * @returns Código de tipo de DTE
 */
export function returnDteCode(dteType: string): string {
  switch (dteType) {
    case 'FE':
      return '01';
    case 'CCFE':
      return '03';
    case 'NRE':
      return '04';
    case 'NCE':
      return '05';
    case 'NDE':
      return '06';
    case 'CRE':
      return '07';
    case 'CLE':
      return '08';
    case 'DCLE':
      return '09';
    case 'FEXE':
      return '11';
    case 'FSE':
      return '14';
    case 'CDE':
      return '15';
    case 'EOE':
      return '17';
    case 'ER':
      return '18';
    default:
      return '';
  }
}

/**
 * Formatea un número a 15 dígitos con ceros a la izquierda
 * @param numero - Número a formatear
 * @returns Número formateado como string con 15 dígitos
 */
export function formatNumber(numero: number): string {
  return numero.toString().padStart(15, '0');
}
