const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

//postgres connection
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'ordermanagement',
    password: '1234',
    port: 5432,
});

//insert order
router.post('/', (req, res, next) => {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;
    const total_price = req.body.total_price;
    const order_status = req.body.order_status;
    const shipping_address = req.body.shipping_address;
    const payment_status = req.body.payment_status;
    
    const query = `
        INSERT INTO orders (user_id, product_id, order_date, quantity, total_price, order_status, shipping_address, payment_status)
        VALUES ($1, $2, NOW(), $3, $4, $5, $6, $7)
        RETURNING *;
    `;
    
    pool.query(query,[user_id, product_id, quantity, total_price, order_status, shipping_address, payment_status], (error, results) => {
        if (error){
            console.log(error);
            res.status(500).json({
                "error": error
            })
        }else{
            console.log("order insert");
            res.status(200).json({
                "message": "order insert"
            })
        }
    })
})

//get all orders
router.get('/', (req, res, next) => {
    const query = 'SELECT * FROM orders;';
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({
            "error": error
        })
      }else{
        console.log(results.rows);
        res.status(200).json(results.rows);
      }
    });
});

//get a order by orderId
router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    const query = 'SELECT * FROM orders WHERE order_id=$1;';
    pool.query(query, [orderId], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({
            "error": error
        })
      }else{
        console.log(results.rows);
        res.status(200).json(results.rows);
      }
    });
});

//update a order
router.patch('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    const newUser_id = req.body.newUser_id;
    const newProduct_id = req.body.newProduct_id;
    const newQuantity = req.body.newQuantity;
    const newTotal_price = req.body.newTotal_price;
    const newOrder_status = req.body.newOrder_status;
    const newShipping_address = req.body.newShipping_address;
    const newPayment_status = req.body.newPayment_status;

    const query = `
        UPDATE orders
        SET
            user_id = $1,
            product_id = $2,
            quantity = $3,
            total_price = $4,
            order_status = $5,
            shipping_address = $6,
            payment_status = $7
        WHERE order_id = $8;
    `;
    
    pool.query(query,[newUser_id, newProduct_id, newQuantity, newTotal_price, newOrder_status, newShipping_address, newPayment_status, orderId], (error, results) => {
        if (error){
            console.log(error);
            res.status(500).json({
                "error": error
            })
        }else{
            console.log("order updated");
            res.status(200).json({
                "message": "order updated"
            })
        }
    })
})

//delete order
router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    const query = "DELETE FROM orders WHERE order_Id=$1";
    pool.query(query, [orderId], (error, results) => {
        if (error){
            console.log(error);
            res.status(500).json({
                "error": error
            });
        }else{
            console.log("order delete");
            res.status(200).json({
                "message": "order delete"
            });
        }
    })
})

module.exports = router;