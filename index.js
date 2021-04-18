
const express = require('express');
const router = require('./routes');
const config = require('./config/config');
const app = express();

require('./config/express')(app);
require('./config/mongooseSetup');

app.use(router);

app.listen(config.development.port , console.log(`Server is running on port ${config.development.port}`));