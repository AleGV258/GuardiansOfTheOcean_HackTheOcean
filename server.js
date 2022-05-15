/*

    HACK THE OCEAN

    Equipo: Guardians of the Ocean

    Integrantes:
    - Lenin Sebastian Facio
    - Michell Alejandro García
    - Luis Josué Cruz
    - José Alfonso Ramos
    - Michel Dávila

*/

const express = require('express'); /* Express para la creación de la API */
const app = express(); /* Creación de la Aplicación */
const port = process.env.PORT || 3000;
const animalesRouter = require('./public/app/routes/Animales');

const cors = require("cors");
const corsOptions = {
    origin: "https://guardiansoftheocean.netlify.app"
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({message: 'API lista para consultas'});
});

/* Conexión con la Base de Datos */
app.use('/HackTheOcean', animalesRouter);

/* Levantar el Servidor */
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
