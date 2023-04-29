const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

const db = require('./config/db')
app.use(express.json());


db.connect((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.use(cors({origin:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(require('./routes/dashboard'))
app.use(require('./routes/login'))
app.use(require('./routes/register'))
app.use(require('./routes/visual'))
app.use(require('./routes/add'))
app.use(require('./routes/userdashboard'))
app.use('/delete',require('./routes/delete'))
app.use('/update', require('./routes/update'))

app.listen(7072, () => {
  console.log('Server listening on port 7072');
});
