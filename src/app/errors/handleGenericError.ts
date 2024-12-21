import { TGenericErrorResponse } from '../interface/error';

const handleGenericError = (err: Error): TGenericErrorResponse => {
  return {
    statusCode: 500,
    message: err?.message,
    error: { details: err },
  };
};

export default handleGenericError;
