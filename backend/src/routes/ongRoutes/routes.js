const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('../../controllers/OngControllers')

const routesOngs = express.Router()

routesOngs.get('/ongs', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), OngController.index)

routesOngs.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create)

module.exports = routesOngs