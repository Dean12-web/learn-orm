var express = require('express');
var router = express.Router();
const models = require('../models')


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const offset = (page - 1 ) * limit;
    const {count, rows: users} = await models.User.findAndCountAll({
      include: [
        { model: models.Todo }
      ],
      order:[['id','asc']],
      limit,
      offset
    })
    res.json({count,users,page})
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
