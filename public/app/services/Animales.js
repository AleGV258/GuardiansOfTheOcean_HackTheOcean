const db = require('../services/db');

function getMultiple() {
    const data = db.query(`SELECT * FROM animal`);
    return data
}

function getAnimal(animal){
    const data = db.query(`SELECT * FROM animal where name='${animal}'`)
    return data
}

module.exports = {
  getMultiple,
  getAnimal
}