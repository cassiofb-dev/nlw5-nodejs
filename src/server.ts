import { http } from "./utils/http";    // IMPORTA O SERVIDOR HTTP
import config   from "./utils/config";  // IMPORTA AS CONFIGURAÇÕES (COLOCAR EM UM DOT ENV)
import date     from "./utils/date";    // FUNÇÃO DE DATA

import "./websocket/client";
import "./websocket/admin";

// INICIALIZA O SERVIDOR E APRESENTA UMA MENSAGEM DE INICIALIZAÇÃO
http.listen(config.port, () => {
  return console.log(`${date()}: Server listening on port ${config.port}`);
});