DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  section INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  quantity INTEGER NOT NULL
);
<<<<<<< HEAD
=======

\i seeds.sql;
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9
