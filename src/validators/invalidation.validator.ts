import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import invalidacionV3Schema from '../schemas/invalidation-v3.json';
import { InvalidacionV3 } from '../types/invalidation';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validateRaw = ajv.compile(invalidacionV3Schema);

export interface ValidationResult<T> {
  isValid: boolean;
  data?: T;
  errors?: ErrorObject[] | null;
}

/**
 * Valida un payload de Evento de Invalidación según la v3.0 del Ministerio de Hacienda.
 */
export function validateInvalidacionV3(payload: unknown): ValidationResult<InvalidacionV3> {
  const isValid = validateRaw(payload);

  if (isValid) {
    return {
      isValid: true,
      data: payload as unknown as InvalidacionV3,
    };
  }

  return {
    isValid: false,
    errors: validateRaw.errors,
  };
}