const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ProfileController = require('../../controllers/ProfileControllers')

const routesProfile = express.Router()

routesProfile.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({ 
      authorization: Joi.string().required() 
  }).unknown()
}), ProfileController.index)

module.exports = routesProfile

