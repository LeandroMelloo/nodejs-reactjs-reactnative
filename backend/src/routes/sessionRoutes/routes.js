const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const SessionController = require('../../controllers/SessionControllers')

const routesSession = express.Router()

routesSession.post('/sessions', celebrate({ 
	[Segments.BODY]: Joi.object().keys({ id: Joi.string().required() 
	})
}), SessionController.create)

module.exports = routesSession