let bcrypt = require('bcrypt')
let models = require('../../models/index')

async function getUser(req,res) {
    try {
        let result = await models.users.findAll({
            include: {
                association: 'recipes',
                attributes: ['id', 'name']
            }
        })
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getUserbyID(req, res) {
    try {
        let result = await models.users.findOne({where: {id: req.params.id}})
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createUser(req, res) {
    try {
        let salt = bcrypt.genSaltSync(10);
      let password = bcrypt.hashSync(req.body.password, salt)
      req.body.password = password
  
      let createUser = await models.users.create(req.body)
      res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateUser(req, res) {
    try {
        let result = await models.users.findOne({where: {id: req.params.id}})
            if (result.length < 1) {
              res.json({message: "Data not available"})
            }
            let updateUser = await result.update(req.body)
            res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteUser(req, res) {
    try {
        let result = await models.users.destroy({where: {id: req.params.id}})
      
        res.json({message: "User deleted", id:req.params.id})
    } catch (error) {
        res.json(error)
    }
    
}

module.exports = {
    getUser, getUserbyID, createUser, updateUser, deleteUser
}