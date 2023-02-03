let express = require('express')

let authController = require('../controllers/authController')
let userController = require('../controllers/userController')
let recipeController = require('../controllers/recipecontroller')
let authMiddleware = require('../middlewares/authMiddleware')

let router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello, this is recipe sharing app!')
  })

router.post('/login', authController.login)

//user
router.get('/user', authMiddleware.isAuthenticate, userController.getUser)
router.get('/user/:id', authMiddleware.isAuthenticate, userController.getUserbyID)
router.put('/user/:id', authMiddleware.isAuthenticate, userController.updateUser)
router.post('/user', authMiddleware.isAuthenticate, userController.createUser) 
router.delete('/user/:id', authMiddleware.isAuthenticate, userController.deleteUser)

//recipe
router.get('/recipe', authMiddleware.isAuthenticate, recipeController.getRecipe)
router.get('/user/:user_id/recipe/:id', authMiddleware.isAuthenticate, recipeController.getRecipebyID)
router.put('/user/:user_id/recipe/:id', authMiddleware.isAuthenticate, recipeController.updateRecipe)
router.post('/user/:user_id/recipe', authMiddleware.isAuthenticate, recipeController.createRecipe) 
router.delete('/user/:user_id/recipe/:id', authMiddleware.isAuthenticate, recipeController.deleteRecipe)

module.exports = router