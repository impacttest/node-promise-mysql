const mysql = require('mysql');
const {
	promiseCallback
} = require('./helper');

class RawConnectionWrapper {
	constructor(_connection) {
		this.connection = _connection;
	}
	query(...args) { return promiseCallback.apply(this.connection, ['query', args]); }
	beginTransaction(...args) { return promiseCallback.apply(this.connection, ['beginTransaction', args]); }
	commit(...args) { return promiseCallback.apply(this.connection, ['commit', args]); }
	rollback(...args) { return promiseCallback.apply(this.connection, ['rollback', args]); }
	changeUser(...args) { return promiseCallback.apply(this.connection, ['changeUser', args]); }
	ping(...args) { return promiseCallback.apply(this.connection, ['ping', args]); }
	statistics(...args) { return promiseCallback.apply(this.connection, ['statistics', args]); }
	pause() { this.connection.pause(); }
	resume() { this.connection.resume(); }
	escape(value) { return this.connection.escape(value); }
	escapeId(value) { return this.connection.escapeId(value); }
	format(sql, values) { return this.connection.format(sql, values); }
}


module.exports = RawConnectionWrapper;