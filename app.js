require('dotenv/config')
const express = require('express')
const app = express()

const port = process.env.APP_PORT || 3001
const apiendpoint = process.env.API_ENDPOINT || '/api'

//Parse JSON bodies
app.use(express.json())

//Require routes
const routes = require('./routes/routes')
app.use(`${apiendpoint}`, routes)

//Static frontend files
app.use(express.static('build'))

//Start server
app.listen(port, () => {
    console.log(`API running on port ${port} 🚀`)
})