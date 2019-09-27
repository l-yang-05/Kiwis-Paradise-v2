
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const PORT = process.env.port || 3001



const rootAPI = require('./routes/rootAPI')
const productsAPI = require('./routes/apiproducts')
const productFilter = require('./routes/productfilter')
const contact = require('./routes/contact')


app.use("/api", productsAPI)
app.use("/api", productFilter)
app.use("/api", contact)
app.use('/', rootAPI)

app.listen(PORT, () => {
    console.log(`Magic happens on port ${PORT}!`)
}) 