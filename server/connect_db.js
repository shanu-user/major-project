import mysql from 'mysql2/promise'


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "project"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
