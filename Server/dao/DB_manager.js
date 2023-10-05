const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(__dirname, "../Database", "sahaay.sqlite");
const fs = require("fs");

export default class sahaayDAO{
constructor(){
    this.db = new sqlite3.Database(dbPath);
    this.initializeDatabase();
    this.query_result = null;
}
// function to create table if not exists
initializeDatabase() {
    const createTableQuery = fs.readFileSync(
      path.join(__dirname, "../Database", "create_tables.sql"),
      "utf8",
    );
    this.db.exec(createTableQuery, (err) => {
      if (err) {
      } else {
      }
    });
  }

  // db functions for the api
}