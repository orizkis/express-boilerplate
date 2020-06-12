const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});

let migration = async () => {
  try {
    await client.connect();

    // Jalankan fungsi untuk membuat tabel disini

    await client.end();
  } catch (err) {
    console.error("2--->", err.message);
    client.end();
  }
};

migration();
