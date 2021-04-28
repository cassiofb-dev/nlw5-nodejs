import { Socket } from "socket.io";

import { io } from "../utils/http";

import ConnectionsService from "../services/ConnectionsService";
import MessagesService    from "../services/MessagesService";
import UsersService       from "../services/UsersService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket: Socket) => {

  const connectionsService = new ConnectionsService();
  const messagesService    = new MessagesService();
  const usersService       = new UsersService();

  socket.on("client_first_access", async (params: IParams) => {

    const socket_id = socket.id;
    const { text, email } = params;

    let user_id = null;

    const userAlreadyExists = await usersService.findByEmail(email);

    if (userAlreadyExists) {

      user_id = userAlreadyExists.id;

      const connection = await connectionsService.findByUserId(userAlreadyExists.id);

      if (connection) {
        connection.socket_id = socket_id;
        await connectionsService.create(connection);
      } else {
        await connectionsService.create({
          socket_id,
          user_id,
        });
      }
    } else {

      const user = await usersService.create(email);

      user_id = user.id;

      await connectionsService.create({
        user_id,
        socket_id,
      });
    }

    await messagesService.create({
      user_id,
      text,
    });

    const userMessages = await messagesService.listByUser(user_id);

    socket.emit("client_list_user_messages", userMessages);

    const usersWithoutAdmin = await connectionsService.findWithoutAdmin();

    io.emit("admin_list_all_users", usersWithoutAdmin);
  });

  socket.on("client_send_to_admin", async params => {
    const { text, socket_admin_id } = params;

    const socket_id = socket.id;

    const connection = await connectionsService.findBySocketId(socket_id);

    if(!connection) return console.log("conexão não encontrada!");

    const { user_id } = connection;

    const message = await messagesService.create({
      text,
      user_id,
    });

    io.to(socket_admin_id).emit("admin_receive_message", {
      message,
      socket_id,
    });
  })
});