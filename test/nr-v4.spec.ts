/**
 * Cobertura de S6/T9: `validateNotaRemisionV4` tiene que aceptar un DTE 04 con
 * la forma de `fe-nr-v4.json` y rechazar cada desvio conocido, en el bloque que
 * corresponde. Corre con `npm run test:nr` (tsc + node, sin framework).
 */
import assert from 'node:assert/strict';
import { validateNotaRemisionV4 } from '../src/index';
import schema from '../src/schemas/fe-nr-v4.json';

const documentoValido = () =>
  ({
    identificacion: {
      version: 4,
      ambiente: '00',
      tipoDte: '04',
      numeroControl: 'DTE-04-M001P001-000000000000001',
      codigoGeneracion: '20F6B3E1-4AA4-4A93-A169-7F718E9987E9',
      tipoModelo: 1,
      tipoOperacion: 1,
      tipoContingencia: null,
      motivoContin: null,
      fecEmi: '2024-05-02',
      horEmi: '10:15:30',
      tipoMoneda: 'USD',
    },
    documentoRelacionado: null,
    emisor: {
      nit: '02221111456789',
      nrc: '123456',
      nombre: 'DULCE TENTACION SOCIEDAD ANONIMA DE CAPITAL VARIABLE',
      codActividad: '10301',
      descActividad: 'Elaboracion de productos de panaderia',
      nombreComercial: 'Dulce Tentacion',
      direccion: {
        departamento: '11',
        municipio: '01',
        distrito: '01',
        complemento: 'Final av. Principal, casa 123',
      },
      telefono: '22222222',
      correo: 'facturacion@dulce.sv',
      codEstable: 'M001',
      codPuntoVenta: 'P001',
    },
    receptor: {
      tipoDocumento: '36',
      numDocumento: '02221111456789',
      nrc: '123456',
      nombre: 'DULCE TENTACION SOCIEDAD ANONIMA DE CAPITAL VARIABLE',
      codActividad: '10301',
      descActividad: 'Elaboracion de productos de panaderia',
      nombreComercial: null,
      direccion: {
        departamento: '11',
        municipio: '02',
        distrito: '01',
        complemento: 'Av. Republica, local 4',
      },
      telefono: '22222223',
      correo: 'sucursal@dulce.sv',
      bienTitulo: '04',
    },
    ventaTercero: null,
    cuerpoDocumento: [
      {
        numItem: 1,
        tipoItem: 1,
        numeroDocumento: null,
        codigo: 'PAN-001',
        codTributo: null,
        descripcion: 'Pan frances',
        cantidad: 3,
        uniMedida: 26,
        precioUni: 1.2,
        montoDescu: 0,
        ventaNoSuj: 0,
        ventaExenta: 0,
        ventaGravada: 3.6,
        tributos: null,
      },
    ],
    resumen: {
      totalNoSuj: 0,
      totalExenta: 0,
      totalGravada: 3.6,
      subTotalVentas: 3.6,
      descuNoSuj: 0,
      descuExenta: 0,
      descuGravada: 0,
      porcentajeDescuento: 0,
      totalDescu: 0,
      tributos: null,
      subTotal: 3.6,
      montoTotalOperacion: 3.6,
      totalLetras: 'TRES 60/100 DOLARES AMERICANOS',
      observaciones: 'Traslado a sucursal Centro',
    },
    apendice: [
      { campo: 'nombEntrega', etiqueta: 'Responsable por parte del emisor', valor: 'Juan Perez' },
      { campo: 'docuEntrega', etiqueta: 'N. de Documento emisor', valor: '1234567' },
      { campo: 'nombRecibe', etiqueta: 'Responsable por parte del receptor', valor: 'Maria Lopez' },
      { campo: 'docuRecibe', etiqueta: 'N. de Documento receptor', valor: '7654321' },
    ],
  }) as any;

const rechazaEn = (mutar: (d: any) => void, instancePath: string, que: string) => {
  const d = documentoValido();
  mutar(d);
  const resultado = validateNotaRemisionV4(d);

  assert.equal(resultado.isValid, false, `se esperaba rechazar: ${que}`);
  assert.ok(
    resultado.errors?.some((error) => error.instancePath === instancePath),
    `ningun error en ${instancePath} para: ${que}. Errores: ${JSON.stringify(
      resultado.errors?.map((error) => `${error.instancePath} ${error.keyword}`),
    )}`,
  );
};

// 1. El documento con forma fe-nr-v4 pasa y devuelve los datos tipados.
const ok = validateNotaRemisionV4(documentoValido());
assert.equal(ok.isValid, true, `documento valido rechazado: ${JSON.stringify(ok.errors)}`);
assert.ok(ok.data, 'isValid sin data');

// 2. Desvios que fe-nr-v4 prohibe, con el error en el bloque correcto.
rechazaEn((d) => (d.extension = null), '', 'bloque extension de v3 (ni siquiera en null)');
rechazaEn((d) => (d.emisor.tipoEstablecimiento = '01'), '/emisor', 'tipoEstablecimiento');
rechazaEn((d) => (d.emisor.codEstableMH = '0001'), '/emisor', 'codEstableMH');
rechazaEn((d) => (d.emisor.codPuntoVentaMH = '0001'), '/emisor', 'codPuntoVentaMH');
rechazaEn(
  (d) => delete d.emisor.direccion.distrito,
  '/emisor/direccion',
  'distrito obligatorio en el emisor',
);
rechazaEn(
  (d) => delete d.receptor.direccion.distrito,
  '/receptor/direccion',
  'distrito obligatorio en el receptor',
);
rechazaEn((d) => (d.identificacion.version = 3), '/identificacion/version', 'version 3');
rechazaEn((d) => (d.identificacion.tipoDte = '01'), '/identificacion/tipoDte', 'tipoDte que no es 04');
rechazaEn(
  (d) => (d.identificacion.numeroControl = 'DTE-04-001001-123456'),
  '/identificacion/numeroControl',
  'numeroControl fuera de patron',
);
rechazaEn((d) => (d.apendice = []), '/apendice', 'apendice vacio (minItems 1)');
rechazaEn((d) => delete d.receptor.bienTitulo, '/receptor', 'bienTitulo obligatorio');
rechazaEn((d) => delete d.resumen.observaciones, '/resumen', 'observaciones obligatorias');
rechazaEn(
  (d) => (d.cuerpoDocumento[0].ivaItem = 0.39),
  '/cuerpoDocumento/0',
  'clave que la NR no declara',
);

// 3. Casos que si son legales y no hay que rechazar.
for (const mutar of [
  (d: any) => (d.apendice = null),
  (d: any) => (d.resumen.observaciones = null),
  (d: any) => (d.documentoRelacionado = null),
  (d: any) => (d.receptor.direccion = null),
]) {
  const d = documentoValido();
  mutar(d);
  const r = validateNotaRemisionV4(d);
  assert.equal(r.isValid, true, `rechazado lo que fe-nr-v4 admite: ${JSON.stringify(r.errors)}`);
}

// 4. El contrato de claves que los tipos de types/nr.ts tienen que espejar.
assert.deepEqual(
  Object.keys(schema.properties).sort(),
  [
    'apendice',
    'cuerpoDocumento',
    'documentoRelacionado',
    'emisor',
    'identificacion',
    'receptor',
    'resumen',
    'ventaTercero',
  ],
  'la raiz del schema cambio de claves',
);

const propiedades = (ruta: string[]) =>
  Object.keys((schema as any).properties[ruta[0]]?.[ruta[1]] ?? (schema as any).properties[ruta[0]]);

assert.equal(propiedades(['identificacion', 'properties']).length, 12, 'identificacion: 12 claves');
assert.equal(propiedades(['emisor', 'properties']).length, 11, 'emisor: 11 claves');
assert.equal(propiedades(['receptor', 'properties']).length, 11, 'receptor: 11 claves');
assert.equal(propiedades(['resumen', 'properties']).length, 14, 'resumen: 14 claves');

console.log('nr-v4: documento valido, 13 rechazos en su bloque, 4 casos legales, contrato de claves ok');
