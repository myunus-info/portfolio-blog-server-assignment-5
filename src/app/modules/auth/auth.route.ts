import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidations } from './auth.validation';
import { UserValidations } from '../user/user.validation';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post(
  '/register',
  validateRequest(UserValidations.createUserValidationSchema),
  AuthControllers.registerUser,
);

router.post(
  '/login',
  validateRequest(AuthValidations.loginValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
