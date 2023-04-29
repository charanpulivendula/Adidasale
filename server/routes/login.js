const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const db = require('../config/db')
const bcrypt = require('bcrypt')

// Login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
      if (err) {
        console.log('Error querying database:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid email or password' });
      } else {
        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.log('Error comparing password:', err);
            res.status(500).json({ message: 'Internal server error' });
          } else if (!result) {
            res.status(401).json({ message: 'Invalid email or password' });
          } else {
            const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
            res.json({ message: 'Logged in successfully', token, user });
          }
        });
      }
    });
  });

  module.exports = router