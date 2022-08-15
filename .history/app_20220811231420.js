const express = require('express')
require('./config/conexion');
const app1 = express()
app1.disable("x-powered-by");
const port = 3000


dbConnection();
app1.use(express.json());

app1.use('/api/productos', require('./routes/producto'));

app1.listen(port, () => {
  console.log(`corriendo`)
})

