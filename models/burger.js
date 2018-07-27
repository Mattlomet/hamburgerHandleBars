var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (val1,val2, cb) {
        orm.insertOne(val1,val2, function (res) {
            cb(res);
        });
    },
    updateOne: function (valOfDev, valOfId, cb) {
        orm.updateOne(valOfDev, valOfId, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
