import { Router } from 'express';
import { ProjectControllers } from './project.controller';

const router = Router();

router.route('/').post(ProjectControllers.createProject).get(ProjectControllers.getAllProjects);

router
  .route('/:id')
  .get(ProjectControllers.getSingleProject)
  .put(ProjectControllers.updateProject)
  .delete(ProjectControllers.deleteProject);

export const ProjectRoutes = router;
