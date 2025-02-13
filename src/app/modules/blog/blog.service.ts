import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const getAllBlogs = async () => {
  return await Blog.find();
};

const getSingleBlog = async (id: string) => {
  return await Blog.findById(id);
};

const createBlog = async (payload: TBlog) => {
  return await Blog.create(payload);
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  return await Blog.findByIdAndUpdate(id, payload);
};

const deleteBlog = async (id: string) => {
  return await Blog.findByIdAndDelete(id);
};

export const BlogServices = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
