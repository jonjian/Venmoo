const path = require('path');
const express = require('express');
require('dotenv').config();
const db = require('../database');
const expressRenderJsx = require('express-render-jsx');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-render-jsx'));

app.use(express.static(path.join(__dirname, '../client/dist')));


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


app.get('/db', (request, response) => {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', (err, result) => {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else {
        response.statusCode = 200;
        response.send(JSON.stringify({results: result.rows}));
       };
    });
  });
});

app.get('/profilepage', (req, res) => {
  res.status(200).render(path.join(__dirname, '../client/src/components/ProfilePage.jsx'));
});

app.get('/login', (req, res) => {
  res.status(200).render(path.join(__dirname, '../client/src/components/Login.jsx'));
});

app.get('/signup', (req, res) => {
  res.status(200).render(path.join(__dirname, '../client/src/components/SignUp.jsx'));
});

app.get('/username/:name', (req, res) => {
  const { name } = req.params;
  const responseData = {};

  db.getUserByName(name)
    .then((userData) => {
      checkDatabaseResponse(userData, res);
      responseData.user = userData.rows[0];
      db.getTransactionHistory(name)
        .then((transactionData) => {
          checkDatabaseResponse(transactionData, res);
          responseData.transactions = transactionData.rows;
          res.send(200, responseData);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
});

if (!module.parent) {
  app.listen(PORT);
  console.log(`Listening on ${PORT}`);
}

const checkDatabaseResponse = function (data, res) {
  if (data.length === 0 || data.rows.length === 0) res.status(404);
};

module.exports.app = app;
