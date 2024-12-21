import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/error';
import httpStatus from 'http-status';

const handleCastError = (err: mongoose.Error.CastError): TGenericErrorResponse => {
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Invalid Id Error',
    error: { details: err },
  };
};

export default handleCastError;
