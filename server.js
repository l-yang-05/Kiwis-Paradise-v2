
require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const PORT = process.env.port || 3001

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(helmet())
app.use(morgan('dev', { stream: accessLogStream }))

const rootAPI = require('./routes/rootAPI')
const productsAPI = require('./routes/apiproducts')
const productFilter = require('./routes/productfilter')
const contact = require('./routes/contact')
const productInvoiceAPI = require('./routes/apiInvoice')
const newContact = require('./routes/apiNewContact')


app.use("/api", productsAPI)
app.use("/api", productInvoiceAPI)
app.use("/api", productFilter)
app.use("/api", contact)
app.use("/api", newContact)
app.use('/', rootAPI)



app.listen(PORT, () => {
    console.log(`Magic happens on port ${PORT}!`)
}) 