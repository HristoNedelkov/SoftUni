const express = require('express');
//const errorHandler = require('./middlewares/errorHandler');
const setupExpress = require('./config/express');

const config = require('./config/index');
const routes = require('./routes');
const app = express();

setupExpress(app);
require('./config/mongoose')

app.use(routes);
//app.use(errorHandler)
app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));