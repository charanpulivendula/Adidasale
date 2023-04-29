const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const bcrypt = require('bcrypt')
const db = require('../config/db')
// Registration endpoint

router.post('/register', (req, res) => {
    const { name, email, password, isAdmin } = req.body;
  
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.log('Error hashing password:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        db.query('INSERT INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)', [name, email, hashedPassword, isAdmin], (err, results) => {
          if (err) {
            console.log('Error inserting into database:', err);
            res.status(500).json({ message: 'Internal server error' });
          } else {
            const token = jwt.sign({ userId: results.insertId }, secret, { expiresIn: '1h' });
            res.json({ message: 'Registered successfully', token });
          }
        });
      }
    });
  });

  module.exports = router