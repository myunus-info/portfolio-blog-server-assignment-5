import { Router } from 'express';
import { BlogControllers } from './blog.controller';

const router = Router();

router.route('/').post(BlogControllers.createBlog).get(BlogControllers.getAllBlogs);

router
  .route('/:id')
  .get(BlogControllers.getSingleBlog)
  .put(BlogControllers.updateBlog)
  .delete(BlogControllers.deleteBlog);

export const BlogRoutes = router;
