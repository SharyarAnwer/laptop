// This prepares the server.
//It prepares the express app by taking in all the middlewares and the exports the app
require("./config/db")

const app = require("express")()
const cors = require("cors")
const bodyParser = require("express").json
const routes = require("./routes")

//cors
app.use(cors())

// For accepting post form data
app.use(bodyParser())

//registering routes
app.use(routes)

module.exports = app