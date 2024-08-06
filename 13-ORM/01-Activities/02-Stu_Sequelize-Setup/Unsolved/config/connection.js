const Sequelize = require('sequelize');
<<<<<<< HEAD

const sequelize = new Sequelize(
  'library_db',
  'postgres',
  'password',
=======
require('dotenv').config();

const sequelize = new Sequelize(
  'library_db',
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
>>>>>>> 735f489c56e8d2991438dfec117bd8760fb896d9
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
