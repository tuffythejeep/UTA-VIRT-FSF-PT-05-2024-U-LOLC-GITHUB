-- Write your Schema Here -- 
DROP DATABASE IF EXISTS orders_db;
CREATE DATABASE orders_db;

\c orders_db;

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INTEGER,
  course_description TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL
);