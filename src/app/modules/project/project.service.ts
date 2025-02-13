import { TProject } from './project.interface';
import { Project } from './project.model';

const getAllProjects = async () => {
  return await Project.find();
};
const getSingleProject = async (id: string) => {
  return await Project.findById(id);
};

const createProject = async (payload: TProject) => {
  return await Project.create(payload);
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  return await Project.findByIdAndUpdate(id, payload);
};

const deleteProject = async (id: string) => {
  return await Project.findByIdAndDelete(id);
};

export const ProjectServices = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
