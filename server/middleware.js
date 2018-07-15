const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const recipeRoute = require('./route/recipe');

module.exports = function (app) {
    app.use(cors({origin: 'http://localhost:4200'}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.get('/', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.use('/recipes', recipeRoute());
};