'use strict';
module.exports = num => {
	let str = '';
	let alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < (num || 30); i++) {
		str += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
	}
	return str;
};
