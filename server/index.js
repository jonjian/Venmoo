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
const { Strategy: LocalStrategy } = require('passport-local');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.use(new LocalStrategy((username, password, done) => {
  db.getUserByName(username)
    .then((data) => {
      if (data.rows.length && data.rows[0].password === password) {
        return done(null, data.rows[0]);
      }
      console.log('Invalid username/password submitted');
      return done(null, false);
    })
    .catch(err => done(err));
  
}));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/payment', (req, res) => {
  let {senderObj, username, amount, isPayment, message} = req.body;
  console.log('SENDER: ', senderObj);
  db.getUserByName(username)
    .then((data) => {
      let {id, name} = data.rows[0];
      db.createTransaction(senderObj.id, id, amount, isPayment)
        .then(() => {
          db.getTransactionHistory(senderObj.name)
            .then((data) => {
              let { rows } = data;
              res.statusCode = 201;
              res.send(data);
            })
        })
        .catch(() => { console.error() })

    })
    .catch(() => {
      console.error();
    })
});

// /passport.authenticate('local', { failureRedirect: '/login' }),

app.post('/test', passport.authenticate('local', 
  {
    failureRedirect: '/login',
    // successRedirect: '/profilepage',
  }), 
  (req, res) => {
    console.log('request authenticated');
    let { username } = req.body;
    sendUserAndTransactions(username, res);
  }
);

// if user is in database
// find user's balance, and update accordingly

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

//comment to make change
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
