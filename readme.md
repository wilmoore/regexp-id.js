# regexp-id
> Returns an identifier based on a RegExp match against an object property's value.

[![Build Status](http://img.shields.io/travis/wilmoore/regexp-id.js.svg)](https://travis-ci.org/wilmoore/regexp-id.js) [![Code Climate](https://codeclimate.com/github/wilmoore/regexp-id.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/regexp-id.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install regexp-id --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/regexp-id.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/regexp-id.svg)](https://www.npmjs.org/package/regexp-id) [![NPM downloads](http://img.shields.io/npm/dm/regexp-id.svg)](https://www.npmjs.org/package/regexp-id) [![David](https://img.shields.io/david/wilmoore/regexp-id.js.svg)](https://david-dm.org/wilmoore/regexp-id.js)

## API Example

```js
var regexpId = require('regexp-id')

var company = {
  name: 'Acme Corporation',
  contact: '"Example Anvil" <example.anvil@example.com>'
}

var id = regexpId(/^"([^"]+)"/, 'contact')

id(company)
//=> '"Example Anvil"'
```

## API

### `regexpId(regexp, key)`

###### arguments

 - `regexp (RegExp)` Regular expression.
 - `path (String)` Dot or bracket-notation string path.

###### returns

 - `(Function)` Unary function accepting an object to evaluate.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/regexp-id.js.svg)](https://github.com/wilmoore/regexp-id.js/blob/master/license)
