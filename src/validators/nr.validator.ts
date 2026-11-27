import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import feNrV4Schema from '../schemas/fe-nr-v4.json';
import { SVFE_NR } from '../types/nr';
import type { ValidationResult } from './invalidation.validator';

// multipleOfPrecision: el esquema pide multipleOf 1e-8, pero en doble precision
// un valor legal como 1.13 no divide exacto (1.13/1e-8 = 112999999.99999999) y
// ajv lo rechazaria. Con 7 digitos se aceptan las fracciones reales del schema
// (hasta 8 decimales) y sigue cayendo un numero con 9.
const ajv = new Ajv({ allErrors: true, multipleOfPrecision: 7 });
addFormats(ajv);

const validateRaw = ajv.compile(feNrV4Schema);

/**
 * Valida el `dteJson` de una Nota de Remision Electronica contra `fe-nr-v4`.
 *
 * El esquema declara `additionalProperties: false` en todos los niveles, asi que
 * un documento que todavia traiga `extension`, o un emisor con
 * `tipoEstablecimiento`/`codEstableMH`/`codPuntoVentaMH`, se rechaca aca y no en
 * Hacienda.
 */
export function validateNotaRemisionV4(payload: unknown): ValidationResult<SVFE_NR> {
  const isValid = validateRaw(payload);

  if (isValid) {
    return {
      isValid: true,
      data: payload as unknown as SVFE_NR,
    };
  }

  const errors: ErrorObject[] | null = validateRaw.errors ?? null;

  return {
    isValid: false,
    errors,
  };
}
