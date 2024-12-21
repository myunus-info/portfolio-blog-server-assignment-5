import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { BlogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find().select('_id title content author').populate('author'),
    query,
  )
    .search(BlogSearchableFields)
    .filter()
    .sort();

  const result = await blogQuery.queryModel;

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, 'No blog found!');
  }

  return result;
};

const createBlog = async (payload: TBlog) => {
  return await Blog.create(payload);
};

const updateBlog = async (
  id: string,
  user: { userId: string; role: string },
  payload: Partial<TBlog>,
) => {
  const blog = await Blog.findById(id).select('_id title content author').populate('author');

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found!');
  }

  // Only the loggedIn-user who created the blog can update
  if (blog.author._id.toString() !== user.userId) {
    throw new AppError(httpStatus.FORBIDDEN, 'You do not have permission to update this blog!');
  }

  if (Object.keys(payload).length) {
    for (const [key, value] of Object.entries(payload)) {
      if (key in blog) {
        blog.set(key, value);
      }
    }

    const result = await blog.save();

    return result;
  }

  return blog;
};

const deleteBlog = async (id: string, user: { userId: string; role: string }) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This blog is not found or already deleted!');
  }

  // Only the loggedIn-user who created the blog can delete
  if (blog.author.toString() !== user.userId) {
    throw new AppError(httpStatus.FORBIDDEN, 'You do not have permission to delete this blog!');
  }

  return await Blog.deleteOne({ _id: id });
};

export const BlogServices = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
