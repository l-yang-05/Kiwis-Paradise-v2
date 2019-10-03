
const router = require('express').Router()
const mysql = require('mysql')

// Connects to mysql db to server
const connection = mysql.createConnection({
    host: process.env.host,
    port: 3306,
    user: process.env.user,
    password: process.env.MYPASSWORD,
    database: "ecom_db"
})

connection.connect((err) => {
    if (err) throw err
})

// Defining api route for /api/products
router.get('/products', (req, res) => {
    const sqlQuery = "SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type,ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency FROM ecom_db.Price INNER JOIN ecom_db.Products ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id"
    connection.query(sqlQuery,
        (err, data) => {
            if (err) throw new Error(`${req.statusCode}: Page did not load properly`)
            res.json(data)
        })
})

module.exports = router