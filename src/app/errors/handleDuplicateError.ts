/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import { TGenericErrorResponse } from './../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Duplicate Field Error',
    error: { details: err },
  };
};

export default handleDuplicateError;
