const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = "";

if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.TEST_DB_URL;
}
else if (process.env.NODE_ENV === "development") {
  dbUrl = process.env.DEVELOPMENT_DB_URL;
}
else {
  throw new Error("Unknown environment");
}



module.exports = new Pool({
  connectionString: dbUrl,
  ssl: false
});