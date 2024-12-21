import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully!',
    data: result,
  });
});

const createBlog = catchAsync(async (req, res) => {
  const blogPayload = { ...req.body, author: req.user.userId };

  const result = await (await BlogServices.createBlog(blogPayload)).populate('author');

  const filteredResponse = {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result.author,
  };

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully!',
    data: filteredResponse,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const user = req.user as { userId: string; role: string };
  const result = await BlogServices.updateBlog(req.params.id, user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully!',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const user = req.user as { userId: string; role: string };
  await BlogServices.deleteBlog(req.params.id, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully!',
  });
});

export const BlogControllers = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
