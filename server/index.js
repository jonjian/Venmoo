const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const expressRenderJsx = require('express-render-jsx');

const db = require('../database');
const { sendUserAndTransactions, databaseRespondsCorrectly } = require('./../helpers/index.js');

const PORT = process.env.PORT || 3000;
const app = express();


const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const { Strategy: LocalStrategy } = require('passport-local');

passport.use(new LocalStrategy((username, password, cb) => {
  // if query fails => cb(err)
  // if the query succeeds and usernmae-password does not match => cb(null, false)
  // if the query succeeds and usernmae-password matches => cb(null, user)

  db.getUserByName(username)
    .then((data) => {
      console.log(data.rows[0]);
      if (data.rows.length && data.rows[0].password === password) {
        return cb(null, data.rows[0]);
      }
      return cb(null, false);
    })
    .catch(err => cb(err));
  
}));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/payment', (req, res) => {
  let {username, amount, isPayment, message} = req.body;
  res.send(201, 'Success!');
});


app.post('/request', (req, res) => {
  let {username, amount, isPayment, message} = req.body;
  res.send(201, 'Success!');
});


app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(Number(id)) || Number(id) % 1 !== 0) {
    res.status(404).send('invalid user id, should be a postive integer');
  } else {
    db.getUser(id, (data) => {
      if (data.length === 0) res.status(404);
      res.send(JSON.stringify(data[0]));
    });
  }
});

const reactRoute = (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));

app.get('/profilepage', reactRoute);

app.get('/login', reactRoute);

app.get('/signup', reactRoute);

app.get('/profilepage/username/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  sendUserAndTransactions(name, res);
});

if (!module.parent) {
  app.listen(PORT);
  console.log(`Listening on ${PORT}`);
}


module.exports.app = app;
