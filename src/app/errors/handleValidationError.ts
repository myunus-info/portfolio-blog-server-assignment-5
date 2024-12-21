import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/error';
import httpStatus from 'http-status';

const handleValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse => {
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
    error: { details: err },
  };
};

export default handleValidationError;
