// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("re9jezc42l0tiy7b", "qgv0cj1imy3lbfhq", "xesx6p0xy11j627f", {
  host: "etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
