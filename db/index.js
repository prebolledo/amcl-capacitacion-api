var mysql = require('mysql')
const util = require('util')

var connection = mysql.createConnection(process.env.MYSQL_CONNECTION_STRING);
const query = util.promisify(connection.query).bind(connection);
export {
    query
}
export default connection  
