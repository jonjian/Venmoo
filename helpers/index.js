const db = require('./../database/index.js');

const capitalize = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

const databaseRespondsCorrectly = function (data, res) {
  if (data.length === 0 || data.rows.length === 0) {
    res.sendStatus(404);
    return false;
  }
  return true;
};

const sendUserAndTransactions = function (username, res) {
  const responseData = {};

  db.getUserByName(username)
    .then((userData) => {
      if (!databaseRespondsCorrectly(userData, res)) {
        return;
      }
      responseData.user = userData.rows[0];
      db.getTransactionHistory(username)
        .then((transactionData) => {
          if (!databaseRespondsCorrectly(transactionData, res)) {
            return;
          }
          responseData.transactions = transactionData.rows;
          res.json(200, responseData);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

module.exports = {
  capitalize,
  databaseRespondsCorrectly,
  sendUserAndTransactions,
};
