// connection.js
const mysql = require('mysql');
const util = require('util');
const settings = require('./db-config.js');

const connection = mysql.createConnection(settings);
connection.queryAsync = util.promisify(connection.query.bind(connection));

connection.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('connected', connection.threadId);
  }
});

module.exports = connection;
