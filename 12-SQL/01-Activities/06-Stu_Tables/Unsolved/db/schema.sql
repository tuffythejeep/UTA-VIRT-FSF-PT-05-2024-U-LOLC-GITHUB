DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
CREATE TABLE biography (
    id INTEGER,
    name VARCHAR(100)
);

\dt
