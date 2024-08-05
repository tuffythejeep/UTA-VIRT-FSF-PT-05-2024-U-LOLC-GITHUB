DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
<<<<<<< HEAD
  id,
  first_name,
  last_name,
  value_card_member
=======
  id INTEGER NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  value_card_member BOOLEAN NOT NULL
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9
);
