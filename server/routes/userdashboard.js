const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/userdashboard', async (req, res) => {
    try {
      const [rows] = await db.promise().query('SELECT * FROM miniadidas')
      res.send([rows]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

module.exports = router