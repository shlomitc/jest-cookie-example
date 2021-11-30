const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({credentials: true})); // This is important for CORS to work
app.use(cookieParser()); //This helps reading cookies from the request

app.get('/register', (req, res) => {
  res.cookie('userId', 'unique-cookie-1234');
  res.send('OK');
})

app.get('/has-cookie', (req, res) => {
  if(req.cookies.userId === 'unique-cookie-1234') {
    res.send('Yes')
  } else {
    res.status(200).send('No')
  }
})

app.listen(process.env.PORT);