
// Importing middleware necessary for dev of express server
require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')


// Creating port variable to use server on and assigns the variable app to express object
const app = express()
const PORT = process.env.port || 4000

/* Using app.use to use the bodyParser module I'm importing. Helps with parsing the res.body to json object so it can be rendered and manipulated
through client */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Helmet helps apply sercurity to application by adding http headers on the responses.
app.use(helmet())

// Create variable with file, then use that variable with morgan to write stream log in file.
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('dev', { stream: accessLogStream }))

// Import route files and assigning them to a variable so I can use them in app.use()
const rootAPI = require('./routes/rootAPI')
const productsAPI = require('./routes/apiproducts')
const productFilter = require('./routes/productfilter')
const contact = require('./routes/contact')
const productInvoiceAPI = require('./routes/apiInvoice')
const newContact = require('./routes/apiNewContact')

// Use the imported routes so that they can be called on server
app.use("/api", productsAPI)
app.use("/api", productInvoiceAPI)
app.use("/api", productFilter)
app.use("/api", contact)
app.use("/api", newContact)
app.use('/', rootAPI)

// App will be placed on the port variable made on line 13
app.listen(PORT, () => {
    console.log(`Magic happens on port ${PORT}!`)
})

// Exporting the app to be used for testing the API endpoints
module.exports = app;