const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/visual', async (req, res) => {
    try {
        res.send({message:"good"})
    //   const [rows] = await db.promise().query('SELECT * FROM adidastable')
    //   res.send([rows]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

module.exports = router