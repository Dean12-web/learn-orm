var express = require('express');
var router = express.Router();
const models = require('../models');
var jwt = require('jsonwebtoken');
var { secretKey, Response, tokenValid } = require('../helpers/util')


router.post('/auth', async function (req, res, next) {
  try {
    const { email, password } = req.body
    const user = await models.User.findOne({
      where: {
        email: email
      }
    })
    if (!user) return res.json(new Response('User not Found', false))
    const match = await user.authenticate(password)
    if (!match) return res.json(new Response('Password Is Wrong', false))
    var token = jwt.sign({ user: user.id }, secretKey);
    res.json(new Response({ email: user.email, token: token }))
  } catch (error) {
    res.json(new Response('Something Went Wrong', false))
  }
});
router.get('/', async function (req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const offset = (page - 1) * limit;
    const { count, rows: users } = await models.User.findAndCountAll({
      include: [
        { model: models.Todo }
      ],
      order: [['id', 'asc']],
      limit,
      offset
    })
    res.json({ count, users, page })
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
    res.json(new Response('Something Went Wrong', false))
  }
});

module.exports = router;
