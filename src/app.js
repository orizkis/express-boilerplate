require("dotenv").config();
const http = require("http");

const { registerTerminus } = require("./core/terminus");
const { registerSocketio } = require("./core/socketio");
const { createApp } = require("./server");

const app = createApp();
const server = http.createServer(app);

registerTerminus(server);
registerSocketio(app, server);

server.listen(process.env.APP_PORT, () => {
  console.log("Server up...");
  console.log(`http://localhost:${process.env.APP_PORT}/`);
});
