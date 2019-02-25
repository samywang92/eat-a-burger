var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(col, col2, order, eaten, cb) {
    orm.insertOne("burgers", col, col2, order, eaten, function(res) {
      cb(res);
    });
  },
  updateOne: function(colToChange, valToChange, where, whereVal, cb) { //"UPDATE ?? SET ?? = ? WHERE ?? = ?";
    orm.updateOne("burgers", colToChange, valToChange, where, whereVal, function(res) {
      cb(res);
    });
  },
  deleteAll: function(cb){
    orm.deleteAll("burgers", function(res){
      cb(res);
    });
  }
};

module.exports = burger;
