import express from "express";  // MICROFRAMEWORK PARA O SERVIDOR
import cors    from "cors";     // PARA O ACESSO DE OUTRAS ORIGENS
import path    from "path";     // MÓDULO BUILT-IN PARA CAMINHOS

import routes from "../routes";  // IMPORTA AS ROTAS

import "../database";    // CRIA A CONEXÃO COM O BANCO DE DADOS

const app = express();  // CRIA O APP EXPRESS

app.use(cors());        // LIBERA O ACESSO DE QUALQUER ORIGEM (NUNCA DEIXAR ASSIM!!!)

//-----INICIO DA CONFIGURAÇÃO DAS PÁGINAS HTML-------//

app.use(express.static(path.join(__dirname, "../..", "public"))); // DECLARA O CAMINHO DOS ARQUIVOS ESTÁTICOS
app.set("views", path.join(__dirname, "../..", "public"));        // DECLARA O CAMINHO DAS VIEWS
app.engine("html", require("ejs").renderFile);                    // CONFIGURA A ENGINE DE RENDERIZAÇÃO
app.set("view engine", "html");                                   // DECLARA A ENGINE DE REDENRIZAÇÃO

// DEFINE A ROTA E O MÉTODO HTTP PARA A PÁGINA CLIENTE E ADMIN
app.get("/pages/client", (request, response) => response.render("html/client.html"));
app.get("/pages/admin", (request, response) => response.render("html/admin.html"));

//-----TÉRMINO DA CONFIGURAÇÃO DAS PÁGINAS HTML------//

app.use(express.json());  // MIDDLEWARE QUE REALIZA O PARSE PARA JSON
app.use(routes);          // DISPONIBILIZA AS ROTAS PARA O APP

export default app;