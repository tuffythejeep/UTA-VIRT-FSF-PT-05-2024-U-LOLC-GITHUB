-- Write your Schema Here -- 
DROP DATABASE IF EXISTS orders_db;
CREATE DATABASE orders_db;

\c orders_db;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  customer_id INTEGER,
  course_description TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customer(id)
  ON DELETE SET NULL
);