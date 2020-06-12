const { Pool } = require("pg");

const {
  pg: { host, port, user, password, database }
} = require("../configs");

const pool = new Pool({
  user,
  host,
  database,
  password,
  port
});

pool
  .query("SELECT NOW()")
  .then(res => {
    console.log(`postgre connected`);
  })
  .catch(err => {
    console.error("postgre : ", err.message);
  });

const cleanPg = () => {
  pool.end(() => {
    console.log("postgre has ended");
  });
};

module.exports = {
  pool,
  cleanPg
};
