import { TMessage } from './message.interface';
import { Message } from './message.model';

const getAllMessages = async () => {
  return await Message.find();
};

const getSingleMessage = async (id: string) => {
  return await Message.findById(id);
};

const createMessage = async (payload: TMessage) => {
  return await Message.create(payload);
};

export const MessageServices = {
  getAllMessages,
  getSingleMessage,
  createMessage,
};
