const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'inventorymanagement'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });


//get all inventory
router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM inventory', (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json(results);
    });
});

module.exports = router;