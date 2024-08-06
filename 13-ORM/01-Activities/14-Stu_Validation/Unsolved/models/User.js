const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      validate: {
      allowNull: false,
      isAlphanumeric: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        allowNull: false,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        min: 8,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
