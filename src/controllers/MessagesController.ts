import { Request, Response } from "express";

import MessagesService from "../services/MessagesService";

class MessagesController {

  async create(request: Request, response: Response): Promise<Response> {

    const { admin_id, text, user_id } = request.body;

    const messageService = new MessagesService();

    const message = await messageService.create({
      admin_id,
      text,
      user_id,
    });

    return response.json(message);
  }

  async showByUser(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const messagesService = new MessagesService();

    const messages = await messagesService.listByUser(id);

    return response.json(messages);
  }

  async showByUserWithDetail(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const messagesService = new MessagesService();

    const messages = await messagesService.listByUserWithDetail(id);

    return response.json(messages);
  }
}

export default MessagesController;