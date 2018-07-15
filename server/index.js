const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const initMiddleware = require('./middleware');

// db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {useNewUrlParser: true}, () => {
    console.log('connected to mongo db');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// start server
const app = express();

initMiddleware(app);

app.listen(config.port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${config.port}`)
});

