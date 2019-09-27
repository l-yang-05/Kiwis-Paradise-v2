
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
    const { type, price } = req.query

    let sqlQuery = 'SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type, ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency FROM ecom_db.Price INNER JOIN ecom_db.Products ON (ecom_db.Price.Products_products_id = ecom_db.Products.products_id) WHERE 1 ';
    if (price && !type) {
        sqlQuery += `AND ecom_db.Price.price = "${price}"`
    } else if (type && !price) {
        sqlQuery += `AND ecom_db.Products.product_type = "${type}"`
    } else if (type && price) {
        sqlQuery += `AND ecom_db.Price.price = "${price}" AND ecom_db.Products.product_type = "${type}"`
    }
    connection.query(sqlQuery, [],
        (err, data) => {
            if (err) throw new Error(`${req.query.type} is an invalid type. Please enter in either these instead: "other", "animal", "character"`)
            res.json(data)
        })

}
)

module.exports = router