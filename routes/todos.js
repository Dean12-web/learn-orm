var express = require('express');
var router = express.Router();
const models = require('../models');
const Controller = require('../controllers/todos');


/* GET todos listing. */
router.get('/', Controller.getTodos);
router.post('/', Controller.addTodos);
router.put('/:id', Controller.editTodos);
router.delete('/:id', Controller.deleteTodos);

module.exports = router;
