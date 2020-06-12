let migration = async (client) => {
  try {
    const tenants = await client.query(
      "CREATE TABLE tenants ( id SERIAL PRIMARY KEY, app VARCHAR(100) UNIQUE NOT NULL, db_name VARCHAR(100) UNIQUE NOT NULL, db_host VARCHAR(100), db_username VARCHAR(100), db_password TEXT, db_port INTEGER NOT NULL DEFAULT 5432, created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW())"
    );
    if (tenants.rows.length === 0) {
      console.log("Table tenants is created");
    }
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  migration,
};
