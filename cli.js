#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rand = require('./');

const cli = meow(`
	Examples
		$ r4nd0mstr1ng
		HH9ICHiBSjKnK219w3R6eKgI58ffMW

		$ r4nd0mstr1ng --number 7
		86mUSdT

		$ r4nd0mstr1ng -n 50
		GXq0Upu6U7m2qhJqeNZUm36eU123tUIVU7FsHiX92XRrqZIeKU

		Options
		 -n, --number  Generate an string with certain length
`, {
	flags: {
		number: {
			type: 'boolean',
			alias: 'n'
		}
	}
});

console.log(cli.flags.number ? rand(cli.input[0]) : rand(cli.input[0]));
