const recipeService = require('../service/recipe');

module.exports = {
    getRecipes: function (req, res) {
        Promise.all([recipeService.getSome(req.query.page, req.query.count), recipeService.count()])
            .then(
                data => {
                    res.json({recipes: data[0], count: data[1]});
                }
            ).catch(
            err => {
                res.status(422).json({message: err.message});
            }
        );
    },
    getRecipe: function (req, res) {
        recipeService.findOne(req.params.id).then(
            data => {
                res.json(data);
            }
        ).catch(
            err => {
                res.status(422).json({message: err.message});
            }
        );
    },
    delete: function (req, res) {
        recipeService.delete(req.body.id).then(
            () => {
                res.json({message: 'Successfully deleted'});
            }
        ).catch(
            err => {
                res.status(422).json({message: err.message});
            }
        );
    },
    create: function (req, res) {
        recipeService.create(req.body).then(
            () => {
                res.json({message: 'Successfully created'});
            }
        ).catch(
            err => {
                res.status(422).json({message: err.message});
            }
        );
    },
    update: function (req, res) {
        const newInstance = {title: req.body.title, description: req.body.description, imgUrl: req.body.imgUrl};
        recipeService.update(req.body._id, newInstance).then(
            () => {
                res.json({message: 'Successfully updated'});
            }
        ).catch(
            err => {
                res.status(422).json({message: err.message});
            }
        );
    }
};