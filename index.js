const Connection = require('./lib/connection.js');
const Pool = require('./lib/pool.js');
const PoolConnection = require('./lib/poolConnection.js');
const mysql = require('mysql');

exports.createConnection = config => new Connection(config);

exports.createPool = config => new Pool(config);

// Accepts a "raw" callback-based Connection or PoolConnection object from the "mysql" package and returns a
// PoolConnection object from this package that wraps that object in a Promise-enabled interface.  The returned object
// should just be used for temporary compatibility with Promise-based code and not for managing database connection lifetime.
exports.promisifyRawConnection = rawDatabaseConnection => new PoolConnection( rawDatabaseConnection );

exports.Types = mysql.Types;
exports.escape = mysql.escape;
exports.escapeId = mysql.escapeId;
exports.format = mysql.format;