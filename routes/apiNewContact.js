
const router = require('express').Router()
const mysql = require('mysql')


const getConnection = () => {
    return mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYPASSWORD,
        database: "ecom_db"
    })
}

const connection = getConnection()

connection.connect((err) => {
    if (err) throw err
})

router.post('/newContact', (req, res) => {
    const fullName = req.body.create.fullName;
    const email = req.body.create.email;
    const message = req.body.create.message
    const sqlQuery = `INSERT INTO ecom_db.Contacts(full_name, email, message) VALUES (?, ? , ?)`

    connection.query(sqlQuery, [fullName, email, message], (err, results, fields) => {
        if (err) {
            throw new Error(`${req.statusCode}: Failed to insert new contact`)
        }
        console.log("Successfully inserted new contact!:")
    })
})

module.exports = router