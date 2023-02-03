let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
let models = require('../../models/index')

async function login(req, res) {
  try {
    let result = await models.users.findOne({where: {email: req.body.email}})
      if (result.length < 1) {
        res.send("User not found")
      }
      let password = req.body.password
      let match = await bcrypt.compare(password, result.password)
      if (!match) {
        res.send("Email or password is wrong!")
      }

      let payload = {
        id: result.id,
        username: result.username,
        email: result.email
      }
      let token = jwt.sign(payload, 'secret')
  
      res.json({message: "Login sukses!", access_token: token})
  } catch (error) {
    res.json(error)
  }
    
}

module.exports = {
    login
}