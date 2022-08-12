const express = require('express');
const base = require('./config/conexion');


// Creamos el servidor
const app = express();

// Conectamos a la BD
base();

app.use(express.json());

app.use('/api/companies', require('./routes/companies'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})