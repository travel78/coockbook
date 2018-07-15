const Recipe = require('../model/recipe');

module.exports = {
    getSome: function (page = 0, count = 9) {
        return Recipe.find().sort({'date': -1}).skip(page * count).limit(+count);
    },
    create: function (recipe) {
        const newRecipe = new Recipe({...recipe, date: Date.now()});
        return newRecipe.save();
    },
    update: function (id, data) {
        return Recipe.findByIdAndUpdate(id, {$set: data}, {new: true});
    },
    delete: function (id) {
        return Recipe.findByIdAndDelete(id);
    },
    findOne: function (id) {
        return Recipe.findById(id);
    },
    count: function () {
        return Recipe.estimatedDocumentCount();
    }
};