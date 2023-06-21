var express = require('express');
var router = express.Router();
const models = require('../models')


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await models.User.findAll({
      include: [
        { model: models.Todo }
      ]
    })
    res.json(users)
  } catch (error) {
    res.json({ error })
  }
});
router.post('/', async function (req, res, next) {
  try {
    const user = await models.User.create({
      email: req.body.email,
      password: req.body.password
    })
    res.json(user)
  } catch (error) {
    res.json({ error })
  }
});

module.exports = router;
