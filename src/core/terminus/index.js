const { createTerminus } = require("@godaddy/terminus");

const { cleanPg } = require("../postgre");
const { cleanMongodb } = require("../mongodb");
const { cleanSocketio } = require("../socketio");

function onSignal() {
  console.log("server is starting cleanup");
  cleanPg();
  cleanMongodb();
  cleanSocketio();
}

async function onHealthCheck() {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
}

const registerTerminus = server => {
  createTerminus(server, {
    signal: "SIGINT",
    healthChecks: { "/healthcheck": onHealthCheck },
    onSignal
  });
};

module.exports = {
  registerTerminus
};
