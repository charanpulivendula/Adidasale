
const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.post('/:id', async(req, res) => {
    console.log(req.params.id);
    const retailerData = req.body;
    const sql1 = `UPDATE Retailer_Info
                SET Retailer = COALESCE(?, Retailer),
                Retailer_ID = COALESCE(?, Retailer_ID),
                Region = COALESCE(?, Region),
                State = COALESCE(?, State),
                City = COALESCE(?, City)
                WHERE id = ${req.params.id};`;
    const sql2 = `UPDATE Product_Info
                SET Product = COALESCE(?, Product),
                Price_per_Unit = COALESCE(?, Price_per_Unit),
                Operating_Profit = COALESCE(?, Operating_Profit),
                Operating_Margin = COALESCE(?, Operating_Margin)
                WHERE id = ${req.params.id};`;
    
    const sql3 = `UPDATE Sales_Info
                SET Invoice = COALESCE(?, Invoice),
                Units_Sold = COALESCE(?, Units_Sold),
                Total_Sales = COALESCE(?, Total_Sales),
                Sales_Method = COALESCE(?, Sales_Method)
                WHERE id = ${req.params.id};`;
    const values1 = [
        retailerData.Retailer,
        retailerData.Retailer_ID,
        retailerData.Region,
        retailerData.State,
        retailerData.City
        ];
    const values2 = [
      retailerData.Product,
      retailerData.Price_per_Unit,
      retailerData.Operating_Profit,
      retailerData.Operating_Margin
      ];
    const values3 = [
      retailerData.Invoice,
      retailerData.Units_Sold,
      retailerData.Total_Sales,
      retailerData.Sales_Method
      ];
    
      try {
        db.promise().query(sql1, values1);
        db.promise().query(sql2, values2);
        db.promise().query(sql3, values3);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating retailer');
      }
   
    return res.status(200).send({message:"success"})
  });

module.exports = router
