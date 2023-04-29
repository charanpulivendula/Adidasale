const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/dashboard', async (req, res) => {
    try {
      const [rows] = await db.promise().query(`SELECT r.ID, r.Retailer, r.Retailer_ID, r.Region, r.State, r.City, p.Product, p.Price_per_Unit, p.Operating_Profit, p.Operating_Margin, s.Units_Sold, s.Total_Sales, s.Sales_Method, s.Invoice
      FROM Retailer_Info r
      JOIN Product_Info p ON r.ID = p.ID
      JOIN Sales_Info s ON r.ID = s.ID;`)
      res.send([rows]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

module.exports = router