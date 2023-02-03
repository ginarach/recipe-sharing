let models = require('../../models/index')

async function getRecipe(req, res) {
    try {
        let result = await models.recipe.findAll()
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            res.json(result)
           
    } catch (error) {
        res.json(error)
    }
}

async function getRecipebyID(req, res) {
    try {
        let result = await models.recipe.findOne({where: {id: req.params.id}})
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function updateRecipe(req, res) {
    try {
        let result = await models.recipe.findOne({where: {id: req.params.id}})
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            let updateRecipe = await result.update(req.body)
            res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createRecipe(req, res) {
    try {
        let result = await models.recipe.create(req.body)
      res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function deleteRecipe(req, res) {
    try {
        let result = await models.recipe.destroy({where: {id: req.params.id}})
        
        res.json({message: "Recipe deleted", id:req.params.id})
    } catch (error) {
        res.json(error)
    }
}   

module.exports = {
    getRecipe, getRecipebyID, createRecipe, updateRecipe, deleteRecipe
}