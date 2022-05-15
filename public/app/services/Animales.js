const db = require('./../services/db');

function getMultiple() {
    const data = db.query(`SELECT * FROM AnimalesMarinos`);
    return data
}

function getAnimal(animal){
    const data = db.query(`SELECT * FROM AnimalesMarinos WHERE Nombre='${animal}'`)
    return data
}

module.exports = {
  getMultiple,
  getAnimal
}
