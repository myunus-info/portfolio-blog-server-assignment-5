import { ZodError } from 'zod';
import { TGenericErrorResponse } from '../interface/error';
import httpStatus from 'http-status';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
    error: { details: err },
  };
};

export default handleZodError;
