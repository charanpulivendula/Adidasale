
const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.post('/:id', async(req, res) => {
    console.log(req.params.id);
    const retailerData = req.body;
    const sql1 = `DELETE FROM Sales_Info WHERE id = ${req.params.id}`;
    const sql2 = `DELETE FROM Product_Info WHERE id = ${req.params.id}`
    const sql3 = `DELETE FROM Retailer_Info WHERE id = ${req.params.id}`

    try {
        await db.promise().query(sql1)
        await db.promise().query(sql2)
        await db.promise().query(sql3)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting retailer');
    }
    console.log(req.params.id);
    return res.status(200).send({message:"success"})
  });

module.exports = router
