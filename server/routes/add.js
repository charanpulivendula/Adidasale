const crypto = require('crypto')
const express = require('express')
const router = express.Router()
const db = require('../config/db')
const id = crypto.randomBytes(16).toString("hex");

router.post('/add',async (req,res)=>{
    const retailerData = req.body
    const sql1 = `INSERT INTO Retailer_Info (Retailer, Retailer_ID, Region, State, City)
                  VALUES (?, ?, ?, ?, ?);`
    const sql2 = `INSERT INTO Product_Info (ID, Product, Price_per_Unit, Operating_Profit, Operating_Margin)
                  VALUES (LAST_INSERT_ID(), ?, ?, ?, ?);`

    const sql3 = `INSERT INTO Sales_Info (ID, Units_Sold, Total_Sales, Sales_Method, Invoice)
                  VALUES (LAST_INSERT_ID(), ?, ?, ?, ?);
                  `
    const values1 = [
    retailerData.Retailer,
    Math.floor(Math.random() * 9000000) + 1000000,
    retailerData.Region,
    retailerData.State,
    retailerData.City,
  ];

  const values2 = [
    retailerData.Product,
    retailerData.Price_per_Unit,
    retailerData.Operating_Profit,
    retailerData.Operating_Margin
  ]

  const values3=[
    retailerData.Units_Sold,
    retailerData.Total_Sales,
    retailerData.Sales_Method,
    retailerData.Invoice
  ]
    try {
      const [result1,field1] = await db.promise().query(sql1, values1);
      const [result2,field2] = await db.promise().query(sql2, values2);
      const [result3,field3] = await db.promise().query(sql3, values3);
    } catch (error) {
      console.log(error);
    }  
    return res.status(200).send({message : "success"})
})

module.exports = router
