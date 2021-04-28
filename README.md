<h1 align="center">
  WebSocket Chat
</h1>

<h4 align="center">Live Chat via <a href="https://socket.io/">WebSocket</a> feito com <a href="https://github.com/nodejs/node" target="_blank">Node.js</a>.</h4>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#como-usar">Como usar</a> •
  <a href="#créditos">Créditos</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://i.imgur.com/XcsG3JC.gif)

## Funcionalidades

* Live Chat - Envie uma mensagem, receba a mensagem
  - Visualização instantânea da mensagem tanto pelo lado do cliente quanto servidor.
* Banco de Dados
  - Mensagens, usuários e conexões são devidamente registrados e gerenciados em suas tabelas no banco de dados.
* Múltiplo atendimento de clientes
* Configurável
  - Cliente pode optar por emitir essa funcionalidade caso desejado.
* Protocolos HTTP e WebSocket
  - Mensagens são enviadas pelo protocolo ws e as demais requisições são gerenciadas pelo protocolo HTTP
* ORM
  - TypeORM utilizada para a conexão com banco de dados.
* TypeScript
  - Facilidade na manuntenção e debug do código.

## Como usar

Para clonar e rodar essa aplicação, você irá precisar [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/). Pelo seu terminal:

```bash
# Clone o repositório
git clone https://github.com/cassiofb-dev/nlw5-nodejs

# Entre no repositório
cd nlw5-nodejs

# Instale as dependências
yarn install

# Rode a aplicação
yarn dev
```

## Créditos

<p align="center"><img src="https://i.imgur.com/k0AsJov.png" alt="websokcet-chat" width="512"></p>

Agradeço a [RocketSeat](https://rocketseat.com.br/) pela oportunidade de aprendizado e experiência incríveis.

Essa aplicação utiliza os seguintes projetos de código aberto:

- [Node.js](https://nodejs.org/)
- [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [CORS](https://github.com/expressjs/cors)
- [Socket.IO](https://github.com/socketio/socket.io)
- [TypeORM](https://github.com/typeorm/typeorm)
- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [uuid](https://github.com/uuidjs/uuid)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

Inspiração do README [electron-markdownify](https://github.com/amitmerchant1990/electron-markdownify).

## License

MIT

---

> [Acesse meu site](https://cassiofernando.netlify.app/) &nbsp;&middot;&nbsp;
> GitHub [@cassiofb-dev](https://github.com/cassiofb-dev) &nbsp;&middot;&nbsp;
> Twitter [@cassiofb-dev](https://twitter.com/cassiofb_dev)
