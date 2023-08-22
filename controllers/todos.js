const models = require('../models')
class Controller {
    static async getTodos(req, res, next) {
        try {
            const todos = await models.Todo.findAll({
                include: [
                    { model: models.User }
                ]
            })
            res.json(todos)
        } catch (error) {
            res.json({ error })
            next(error)
        }
    }

    static async addTodos(req, res, next) {
        try {
            const todo = await models.Todo.create({
                title: req.body.title,
                UserId: req.body.UserId
            })
            res.json(todo)
        } catch (error) {
            res.json({ error })
            next(error)
        }
    }

    static async editTodos(req,res,next){
        try {
            const id = req.params.id
            const todo = await models.Todo.update({
                title: req.body.title,
                complete: req.body.complete
            }, {
                where: {
                    id
                },
                returning: true,
                plain: true
            })
            res.json(todo[1])
        } catch (error) {
            res.json({ error })
            next(error)
        }
    }

    static async deleteTodos(req,res,next){
        try {
            const id = req.params.id
            const todo = await models.Todo.destroy({
                where: {
                    id
                }
            })
            res.json(todo)
        } catch (error) {
            res.json({ error })
        }
    }
}

module.exports = Controller