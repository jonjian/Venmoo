DROP DATABASE IF EXISTS venmoo;

CREATE DATABASE venmoo;

\connect venmoo;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transactions;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  balance INT NOT NULL
);

CREATE TABLE transactions (
  id SERIAL NOT NULL PRIMARY KEY,
  sender_id INT references users(id),
  receiver_id INT references users(id),
  amount INT NOT NULL,
  status CHAR(8) NOT NULL,
  created_timestamp timestamp NOT NULL,
  resolved_timestamp timestamp,
  description VARCHAR(200)
);