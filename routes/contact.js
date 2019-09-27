
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
router.get('/contacts', (req, res) => {
    connection.query("SELECT * FROM ecom_db.Contacts", (err, data) => {
        console.log(err)
        res.json(data)
    })
})

module.exports = router