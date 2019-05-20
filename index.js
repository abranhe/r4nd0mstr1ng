'use strict';
module.exports = length => {
	let str = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < (length || 30); i++) {
		str += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return str;
};
