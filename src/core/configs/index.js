const _ = require("lodash");

const { PROD_ENV, DEV_ENV, TEST_ENV } = require("./constants");
const env = _.isNil(process.env.APP_ENV) ? "dev" : process.env.APP_ENV;

module.exports = {
  app: {
    env,
    port: process.env.APP_PORT
  },
  pg: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB
  },
  mongodb: {
    url: process.env.MONGODB_URL,
    database: process.env.MONGODB_DB
  },
  jwt: {
    secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret-key"
  },
  isProd: () => env === PROD_ENV,
  isDev: () => env === DEV_ENV,
  isTest: () => env === TEST_ENV
};
