var jwt = require('jsonwebtoken');
const models = require('../models');
const secretKey = 'dean12'
const bcrypt = require('bcrypt');
const saltRounds = 10;

class Response {
    constructor(data, success = true) {
        this.data = data
        this.success = success
    }
}
module.exports = {
    tokenValid: async (req, res, next) => {
        // Set Header For Token Valid
        // setting header
        try {
            const headerToken = req.get('Authorization')
            const token = headerToken.replace('Bearer ', '')
            let decoded = jwt.verify(token, secretKey)
            const user = await models.User.findOne({ id: decoded.id })
            if(!user) return res.json(new Response('Token Not Valid', false))
            req.user = user
            next()   
        } catch (error) {
            console.log(error)
            res.status(500).json(new Response('Token Not Valid', false))
        }
    },
    Response,
    secretKey,
    hashPassword : password => bcrypt.hashSync(password, saltRounds)
}