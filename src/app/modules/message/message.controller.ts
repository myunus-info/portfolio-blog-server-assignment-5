import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MessageServices } from './message.service';

const getAllMessages = catchAsync(async (req, res) => {
  const result = await MessageServices.getAllMessages();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Messages fetched successfully!',
    data: result,
  });
});
const getSingleMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getSingleMessage(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message fetched successfully!',
    data: result,
  });
});

const createMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.createMessage(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Message created successfully!',
    data: result,
  });
});

export const MessageControllers = {
  getAllMessages,
  getSingleMessage,
  createMessage,
};
