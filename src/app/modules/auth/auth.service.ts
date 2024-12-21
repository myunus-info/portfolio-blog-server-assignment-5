import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import config from '../../config';
import { generateToken } from './auth.utils';
import { TLoginUser } from './auth.interface';

const registerUserIntoDB = async (payload: TUser) => {
  const user = await User.doesUserExistByEmail(payload.email);
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user already exists!');
  }

  const result = await User.create(payload);

  return {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials!');
  }

  // Check if the user is blocked
  if (user?.isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }

  // Check if the password is correct
  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials!');
  }

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const token = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { token };
};

export const AuthServices = {
  registerUserIntoDB,
  loginUser,
};
