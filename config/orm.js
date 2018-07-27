var connection = require('./connection.js');

var orm = {
    selectAll : function(cb){
         var queryString = "SELECT * FROM burgers";
         connection.query(queryString, function (err, result) {
             if (err) throw err;
             cb(result);
         });
    },
    insertOne : function(name,dev,cb){
         var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
         connection.query(queryString, [name,dev], function (err, result) {
             if (err) throw err;
             cb(result);
         });
    },
    updateOne : function(valOfDev,valOfId,cb){
         var queryString = "UPDATE burgers";

         queryString += " SET devoured=";
         queryString += valOfDev;
         queryString += " WHERE id=";
         queryString += valOfId;

         connection.query(queryString, function (err, result) {
             console.log(result);
             if (err) throw err;
             cb(result);
         });
    }
};

module.exports = orm;