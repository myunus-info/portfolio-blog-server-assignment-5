import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects fetched successfully!',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getSingleProject(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project fetched successfully!',
    data: result,
  });
});

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Project created successfully!',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProject(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully!',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  await ProjectServices.deleteProject(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully!',
  });
});

export const ProjectControllers = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
