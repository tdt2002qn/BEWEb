const express = require('express');
const path = require('path');
require('dotenv').config();
const configviewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 80;
const hostname = process.env.HOST_NAME;
const { connected } = require('process');
//config template engine
configviewEngine(app);


//Khai bao router
app.use('/', webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listen port ${port}`)
});