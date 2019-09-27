
const router = require('express').Router()
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecom_db"
})

connection.connect((err) => {
    if (err) throw err
})

router.get('/productfilter', (req, res) => {
    if (req.query.type && req.query.price === undefined) {
        connection.query(`SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type, ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency FROM ecom_db.Price INNER JOIN ecom_db.Products ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id  WHERE ecom_db.Products.product_type = ${req.query.type}`,
            (err, data) => {
                if (err) throw new Error(`${req.query.type} is an invalid type. Please enter in either these instead: "other", "animal", "character"`)
                res.json(data)
            })
    } else if (req.query.price && req.query.type === undefined) {
        connection.query(`SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type, ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency FROM ecom_db.Price INNER JOIN ecom_db.Products ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id  WHERE ecom_db.Price.price = ${req.query.price}`,
            (err, data) => {
                if (err) throw new Error(`${req.query.price} is an invalid price. Please enter in either these instead: "4", "5", "6"`)
                res.json(data)
            })
    } else if (req.query.type && req.query.price) {
        connection.query(`SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type, ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency FROM ecom_db.Price INNER JOIN ecom_db.Products ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id WHERE ecom_db.Products.product_type=${req.query.type} && ecom_db.Price.price = ${req.query.price}`,
            (err, data) => {
                if (err) throw new Error(`Queries in parameters are invalid. Please check your query again.`)
                res.json(data)
            })
    }

}
)

module.exports = router