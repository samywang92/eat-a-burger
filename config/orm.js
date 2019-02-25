var connection = require("../config/connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, col, col2, order, eaten, cb) {
    var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
    console.log(queryString);

    connection.query(queryString, [table, col, col2, order, eaten], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, colToChange, valToChange, where, whereVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    console.log(queryString);

    connection.query(queryString, [table, colToChange, valToChange, where, whereVal], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteAll: function (table, cb) {
    var queryString = "DELETE FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;