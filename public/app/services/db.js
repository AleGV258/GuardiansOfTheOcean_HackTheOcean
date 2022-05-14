const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('./public/database/Animales.db'), {fileMustExist: true});

function query(sql) {
  return db.prepare(sql).all();
}

module.exports = {
  query
}