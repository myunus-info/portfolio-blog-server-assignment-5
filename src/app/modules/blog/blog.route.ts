import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router
  .route('/blogs')
  .post(
    auth(USER_ROLE.user),
    validateRequest(BlogValidations.createBlogValidationSchema),
    BlogControllers.createBlog,
  )
  .get(BlogControllers.getAllBlogs);

router
  .route('/blogs/:id')
  .patch(
    auth(USER_ROLE.user),
    validateRequest(BlogValidations.updateBlogValidationSchema),
    BlogControllers.updateBlog,
  )
  .delete(auth(USER_ROLE.user), BlogControllers.deleteBlog);

export const BlogRoutes = router;
