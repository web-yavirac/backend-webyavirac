const express = require('express')
const db = require('./config/conexion');
const app1 = express()
app1.disable("x-powered-by");
const port = 3000


db.dbConnection();
app1.use(express.json());



app1.use('/api', require('./routes/web'));

app1.listen(port, () => {
  console.log(`corriendo`)
})

