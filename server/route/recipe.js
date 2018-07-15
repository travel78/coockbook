const router = require('express').Router();
const recipeCntr = require('../controller/recipe');

module.exports = function () {
    router.get('/', recipeCntr.getRecipes);
    router.get('/:id', recipeCntr.getRecipe);
    router.delete('/', recipeCntr.delete);
    router.post('/', recipeCntr.create);
    router.put('/', recipeCntr.update);
    return router;
};