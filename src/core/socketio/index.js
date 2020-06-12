const { registerRouteSocketIo } = require("../../router");

const registerSocketio = (app, server) => {
  const io = require("socket.io")(server);
  registerRouteSocketIo(app, io);
};

const cleanSocketio = () => {
  console.log("socket.io has ended");
  io.close();
};

module.exports = {
  registerSocketio,
  cleanSocketio,
};
