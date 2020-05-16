const express = require('express')
const routes = express.Router()
const {celebrate, Segments, Joi} = require('celebrate')
const equipmenstController = require('./controllers/equipmentsController')


routes.get('/equipments',equipmenstController.index)

routes.post('/equipments', celebrate({
    [Segments.BODY] : Joi.object().keys({
        model:Joi.string().required(),
        category:Joi.string().valid('cartucho','toner').required(),
        ppm:Joi.number().min(0).max(999999),
        wifi:Joi.boolean().valid(true,false),
        consumption:Joi.number().min(0).max(999999)
    })
}), equipmenstController.create)
routes.put('/equipments/:id',celebrate({
    [Segments.BODY] : Joi.object().keys({
        model:Joi.string(),
        category:Joi.string().valid('cartucho,', 'toner'),
        ppm:Joi.number().min(0).max(999999),
        wifi:Joi.boolean(),
        consumption:Joi.number().min(0).max(999999)
    })
}),equipmenstController.update)

routes.delete('/equipments/:id',equipmenstController.delete)

module.exports = routes