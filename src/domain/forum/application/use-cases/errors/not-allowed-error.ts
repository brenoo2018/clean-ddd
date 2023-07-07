import { UseCaseError } from '@/core/errors/use-case-erros';

export class NotAllowedError extends Error implements UseCaseError {
  constructor() {
    super('Not Allowed.');
  }
}
