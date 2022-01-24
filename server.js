// import modules
const express = require('express');
const parser = require('./lib/parser')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();

const PORT = process.env.PORT || 3001;

// add in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(apiRoutes)
app.use(htmlRoutes)

// call parser to generate note content if present
parser()

// add listener for server events
app.listen(PORT, () => {
    console.log(`API server is active now on PORT ${PORT}`)
})