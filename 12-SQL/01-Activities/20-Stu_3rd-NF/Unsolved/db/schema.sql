DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);

CREATE TABLE locations (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
      FOREIGN KEY (business_id)
      REFERENCES book_prices(id)
      ON DELETE SET NULL