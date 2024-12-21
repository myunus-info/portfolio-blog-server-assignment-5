import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

const blockUser = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  if (user.isBlocked) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user is already blocked!');
  }

  const result = await User.findByIdAndUpdate(
    user._id,
    { isBlocked: true },
    { runValidators: true, new: true },
  );

  return result;
};

const deleteBlog = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This blog is not found or already deleted!');
  }

  const result = await Blog.findByIdAndDelete(blog._id);

  return result;
};

export const AdminServices = {
  blockUser,
  deleteBlog,
};
