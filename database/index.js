const pg = require('pg');
// const { users, transactions } = require('./dummy-data.js')


app.get('/db', (request, response) => {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', (err, result) => {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
