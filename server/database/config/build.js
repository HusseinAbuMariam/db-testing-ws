const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connection");

// const sql = readFileSync(join(__dirname, "build.sql")).toString();

// connection
//   .query(sql)
//   .then(() => console.log("build created successfully!"))
//   .catch(e => console.error('failed to build', e.stack));
// const dbBuild = () => {
//   const sql = readFileSync(join(__dirname, "build.sql")).toString();
//   return connection.query(sql);
// };
// module.exports = { dbBuild };
const fs = require("fs");
const build = () => {
  let sql;


  if (process.env.NODE_ENV === "test") {


    sql = fs.readFileSync(
      join(__dirname, "test_build.sql")
    ).toString();


  } else {


    sql = fs.readFileSync(
      join(__dirname, "build.sql")
    ).toString();


  }


  return connection.query(sql);


};


module.exports = {
  dbBuild: build
};