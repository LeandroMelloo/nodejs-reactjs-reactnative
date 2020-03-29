const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routesOngs = require('./routes/ongRoutes/routes')
const routesProfile = require('./routes/profileRoutes/routes')
const routesSession = require('./routes/sessionRoutes/routes')
const routesIncident = require('./routes/IncidentRoutes/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routesOngs)
app.use(routesProfile)
app.use(routesSession)
app.use(routesIncident)
app.use(errors())

module.exports = app