////// config
var port = 5555
const express = require('express')
var morgan = require('morgan')
const app = express()
//////

////// routes
const waitingRoomRoutes = require('./routes/waitingroom');
const accountRoutes = require('./routes/account')
const datarouterRoutes = require('./routes/datarouter')
const fortniteRoutes = require('./routes/fortnite')
const eulatrackingRoutes = require('./routes/eulatracking')
const lightswitchRoutes = require('./routes/lightswitch')
/////

app.use(morgan('combined')) // logging utility

app.use('/waitingroom', waitingRoomRoutes);
app.use('/account', accountRoutes);
app.use('/datarouter', datarouterRoutes);
app.use('/fortnite', fortniteRoutes);
app.use('/eulatracking', eulatrackingRoutes)
app.use('/lightswitch', lightswitchRoutes)

app.listen(port, () => {
    console.log("[Ficello's FN Server] Started on port " + port)
})