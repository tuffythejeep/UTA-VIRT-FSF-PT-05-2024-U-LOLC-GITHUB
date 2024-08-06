<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9

class Book extends Model {}

Book.init(
  {
<<<<<<< HEAD
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
=======
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
    },
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
<<<<<<< HEAD
    modelName: 'book'
=======
    modelName: "book",
    freezeTableName: true,
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9
  }
);

module.exports = Book;
