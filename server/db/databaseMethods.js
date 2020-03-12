const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);



const getAllData = function (callback) {
    //create a query string
    var queryString = "SELECT * FROM propertyDetails";

    //pass query string into a query request using connection
    connection.query(queryString, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            callback(data);
        }
    })

    //return the object back from the db
}


module.exports = {
    getAllData
};
