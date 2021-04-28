import { createServer }   from "http";      // HTTP SERVER BUILT-IN DO NODE
import { Server, Socket } from "socket.io"; // SERVER E SOCKET PARA O PROTOCOLO WS

import app from './app';

//-----INÍCIO DA CONFIGURAÇÃO DO WEB SOCKET----------//

const http = createServer(app); // CRIA O PROTOCOLO HTTP
const io   = new Server(http);  // CRIA O PROTOCOLO WS

// ESCUTA AO EVENTO DE CONEXÃO
io.on("connection", (socket: Socket) => {
  // console.log(`${date()}: Conectado ao web socket com id:${socket.id}`);
});

//-----TÉRMINO DA CONFIGURAÇÃO DO WEB SOCKET---------//

export { http, io };