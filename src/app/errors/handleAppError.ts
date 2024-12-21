import { TGenericErrorResponse } from '../interface/error';
import AppError from './AppError';

const handleAppError = (err: AppError): TGenericErrorResponse => {
  return {
    statusCode: err?.statusCode,
    message: err?.message,
    error: { details: err },
  };
};

export default handleAppError;
