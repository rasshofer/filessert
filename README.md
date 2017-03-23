# Filessert

> A simple (CLI) tool to compare two files

[![Build Status](https://travis-ci.org/rasshofer/filessert.svg)](https://travis-ci.org/rasshofer/filessert)
[![Coverage Status](https://coveralls.io/repos/github/rasshofer/filessert/badge.svg)](https://coveralls.io/github/rasshofer/filessert)
[![Dependency Status](https://david-dm.org/rasshofer/filessert/status.svg)](https://david-dm.org/rasshofer/filessert)
[![Dependency Status](https://david-dm.org/rasshofer/filessert/dev-status.svg)](https://david-dm.org/rasshofer/filessert)

Filessert uses Node.js’s [`crypto`](https://nodejs.org/api/crypto.html) library for hash comparison, so make sure you’re using a Node.js build that includes support for the `crypto` module.

## Usage

```shell
npm install --save-dev filessert
```

```js
const filessert = require('filessert');

filessert(file1, file2).then(() => {
  console.log('Yay!');
}).catch(() => {
  console.log('Oh no!');
});
```

## CLI

```shell
npm install -g filessert
```

```shell
$ filessert test1.txt test1.txt
```

## options

### `algorithm` (string)

> Specifies the hash algorithm to be used for comparison (see Node.js’s [`crypto`](https://nodejs.org/api/crypto.html) library)

```js
const filessert = require('filessert');

filessert(file1, file2, {
  algorithm: 'whirlpool'
}).then(() => {
  console.log('Yay!');
}).catch(() => {
  console.log('Oh no!');
});
```

```shell
$ filessert test1.txt test1.txt --algorithm=whirlpool
```

## Changelog

* 0.0.1
  * Initial version

## License

Copyright (c) 2017 [Thomas Rasshofer](http://thomasrasshofer.com/)  
Licensed under the MIT license.

See LICENSE for more info.
