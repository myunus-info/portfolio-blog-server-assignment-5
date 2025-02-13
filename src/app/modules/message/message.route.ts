import { Router } from 'express';
import { MessageControllers } from './message.controller';

const router = Router();

router.route('/').post(MessageControllers.createMessage).get(MessageControllers.getAllMessages);

router.route('/:id').get(MessageControllers.getSingleMessage);

export const MessageRoutes = router;
