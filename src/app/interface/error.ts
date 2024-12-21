/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError } from 'zod';
import { Error as MongooseError } from 'mongoose';
import { MongoServerError } from 'mongodb';
import AppError from '../errors/AppError';

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  error: any;
};

export type CustomGlobalError =
  | ZodError
  | MongooseError.ValidationError
  | MongooseError.CastError
  | AppError
  | MongoServerError
  | Error;
