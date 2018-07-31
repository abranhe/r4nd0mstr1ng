<p align="center">
	<a href="https://www.npmjs.com/package/r4nd0mstr1ng"><img src="https://cdn.abraham.gq/projects/r4nd0mstr1ng/r4nd0mstr1ng.png" width="70%"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/r4nd0mstr1ng"><b>r4nd0mstr1ng</b></a>
	: 🌀 Random String Generator
</p>

<p align="left">
	<a href="https://travis-ci.org/abranhe/r4nd0mstr1ng"><img src="https://img.shields.io/travis/abranhe/r4nd0mstr1ng.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/abranhe.js/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/r4nd0mstr1ng.svg" /></a>
</p>

# Why r4nd0mstr1ng?

- Clean and focused
- [CLI](#cli) included
- Actively maintained
- Fast and reliable

# Install

```
$ npm install r4nd0mstr1ng
```

# Usage

```js
const rand = require('r4nd0mstr1ng');

console.log(rand());
//=> HH9ICHiBSjKnK219w3R6eKgI58ffMW

console.log(rand(7));
//=> dsdfGf4
```

# API

**rand()**

> Return an string with default value of 30

Return Type: `string`

**rand(number)**

> Return an string with costume number

Return Type: `string`

# CLI

```
Examples
	$ r4nd0mstr1ng
	HH9ICHiBSjKnK219w3R6eKgI58ffMW

	$ r4nd0mstr1ng --number 7
	86mUSdT

	$ r4nd0mstr1ng --n 50
	GXq0Upu6U7m2qhJqeNZUm36eU123tUIVU7FsHiX92XRrqZIeKU

	Options
	 -n, --number  Generate an string with certain length
```

# Related

-  [all-words](https://github.com/abranhe/all-words): Generate all available words (up to four letters) super fast.
-  [randn](https://github.com/abranhe/randn): 🔢 Random number generator.

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/r4nd0mstr1ng/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
