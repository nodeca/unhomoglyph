# unhomoglyph

[![Build Status](https://img.shields.io/travis/nodeca/unhomoglyph/master.svg?style=flat)](https://travis-ci.org/nodeca/unhomoglyph)
[![NPM version](https://img.shields.io/npm/v/unhomoglyph.svg?style=flat)](https://www.npmjs.org/package/unhomoglyph)

> Replace all homoglyphs with base characters. Useful to detect similar strings.

Data source - [Recommended confusable mapping for IDN](http://www.unicode.org/Public/security/latest/confusables.txt), v9.0.0.


## Install

```bash
npm install unhomoglyph --save
```


## Example

```js
const unhomoglyph = require('unhomoglyph');

console.log(unhomoglyph('AΑАᎪᗅᴀꓮ')); // => AAAAAAA
```


## Update

```bash
npm run update
```


## License

[MIT](https://github.com/nodeca/unhomoglyph/blob/master/LICENSE)
