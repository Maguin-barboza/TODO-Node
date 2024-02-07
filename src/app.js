const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./db/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

(async () => {
    try{
        await sequelize.sync();
    }
    catch(error) {
        console.error(`Erro ao sincronizar tabelas: ${error} `)
    }
})();


const indexRoute = require('./routes/index-route');
const itemRoute = require('./routes/item-route');

 app.use('/', indexRoute);
 app.use('/todoitem', itemRoute);
 
module.exports = app;