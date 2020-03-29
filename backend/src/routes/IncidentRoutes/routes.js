const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const IncidentsController = require('../../controllers/IncidentControllers')

const routesIncident = express.Router()

routesIncident.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentsController.index)

routesIncident.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({ 
    authorization: Joi.string().required() 
  }).unknown()
}), IncidentsController.create)

routesIncident.delete('/incidents/:id', celebrate({ 
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() 
  })
}), IncidentsController.delete)

module.exports = routesIncident