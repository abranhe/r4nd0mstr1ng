<p align="center">
	<a href="https://www.npmjs.com/package/r4nd0mstr1ng">
		<img src="https://cdn.abranhe.com/projects/r4nd0mstr1ng/r4nd0mstr1ng.png" width="70%">
	</a>
	<br>
</p>
	
# r4nd0mstr1ng

> 🌀Random String Generator

[![](https://img.shields.io/travis/abranhe/r4nd0mstr1ng.svg?logo=travis)](https://travis-ci.org/abranhe/r4nd0mstr1ng)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://img.shields.io/github/license/abranhe/r4nd0mstr1ng.svg)](https://github.com/abranhe/r4nd0mstr1ng/blob/master/license)
[![](https://img.shields.io/npm/v/r4nd0mstr1ng.svg)](https://npmjs.com/package/r4nd0mstr1ng)

## Install

```
$ npm install r4nd0mstr1ng
```

## Usage

```js
const rand = require('r4nd0mstr1ng');

console.log(rand());
//=> 'HH9ICHiBSjKnK219w3R6eKgI58ffMW'

console.log(rand(7));
//=> 'dsdfGf4'
```

## API

### rand()

Return Type: `string`<br />
Default: `30`

Return an string with default value of 30

### rand(number)

Return Type: `string`

Return an string with custom length

## Related

- [random-string-cli](https://github.com/abranhe/random-string-cli): CLI for this module
- [all-words](https://github.com/abranhe/all-words): Generate all available words (up to four letters) super fast.
- [randn](https://github.com/abranhe/randn): 🔢 Random number generator.

## License

MIT © [Carlos Abraham](https://abranhe.com)
