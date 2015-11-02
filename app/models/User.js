/**
 * Created by kodevz on 8/5/15.
 */
'use strict';

module.exports = function(app, db) {
	var _Schema = db.Schema;

	var _UserSchema = new _Schema({
		username: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		password: {
			type: String,
			required: true
		}
	});

	_
	var _User = db.model('User', _UserSchema);
	app.db.User = _User;

};