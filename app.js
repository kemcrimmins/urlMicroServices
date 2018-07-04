const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


// ROUTE TO PROCESS FORM
app.use('/shortenUrl', (req, res) => {
  const url = req.body.url;
  res.send("longUrl = " + url); // route test

  // verify input for url syntax
  // if not ure: ERROR
  // else: 
    // save url to db
    // get db ID
    // encode db ID
    // display encoded db ID as shortened url
});

// ROUTE FOR SHORT URL
app.use('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;
  res.send("shortURL = " + shortUrl); // route test

  // decode shortUrl to db ID
  // look up db ID
  // if db ID not present: ERROR
  // else: redirect to full url's site
});

// ROOT ROUTE
app.use('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/src/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});