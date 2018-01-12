const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: `${process.env.DATABASE_URL}?ssl=true`,
  ssl: true,
  // database: 'venmoo',
});

client.connect();
//check
const getTransactionHistory = function (userName) {
  const queryString = `
  SELECT
    tab.transaction_id,
    tab.amount,
    tab.status,
    tab.type,
    tab.created_timestamp,
    tab.resolved_timestamp,
    tab.description,
    tab.sender_name,
    users.name AS receiver_name
  FROM
    (SELECT
      transactions.id AS transaction_id,
      transactions.amount,
      transactions.status,
      transactions.type,
      transactions.created_timestamp,
      transactions.resolved_timestamp,
      transactions.description,
      transactions.receiver_id,
      users.name AS sender_name
    FROM transactions, users
    WHERE transactions.sender_id = users.id)
    AS tab, users
  WHERE tab.receiver_id=users.id`;

  const specificUserQueryString = `SELECT * FROM (${queryString}) AS data
  WHERE data.sender_name='${userName}' OR data.receiver_name='${userName}'`;

  return client.query(userName ? specificUserQueryString : queryString);
};

const getUser = (id, cb) => {
  client.query(`SELECT * from users WHERE id = ${id};`, (err, res) => {
    if (err) throw err;
    cb(res.rows);
  });
};

const getUserByName = (name) => {
  const queryString = `SELECT * FROM users WHERE name = '${name}'`;
  return client.query(queryString);
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
const
>>>>>>> Committed a comment
=======
const createTransaction = () => {
  
}
>>>>>>> Uses getUserByName in server post to payments endpoint
=======
const createTransaction = () => {
  
}

const updateBalanceQuery = (isPayment, amount) => {
  let operation = isPayment ? '+' : '-';
  const updateReceiver = `UPDATE users
    SET balance = balance ${operation} ${amount.slice(1)}::float8::numeric::money
    WHERE id = ${receiver_id};
  `;
};

const updateBalance = (isPayment) => {
  var operation = isPayment ? '+' : '-';
  const updateReceiver = `UPDATE users
    SET balance = balance ${operation} ${amount.slice(1)}::float8::numeric::money
    WHERE id = ${receiver_id};
  `;
};
>>>>>>> 55b5acfd2f0ea823afe35b931c3f019b997aa6d8

const updateBalanceQuery = (isPayment, amount) => {
  let operation = isPayment ? '+' : '-';
  const updateReceiver = `UPDATE users
    SET balance = balance ${operation} ${amount.slice(1)}::float8::numeric::money
    WHERE id = ${receiver_id};
  `;
};


module.exports = {
  getUser,
  getTransactionHistory,
  getUserByName,
};
