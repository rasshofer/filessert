'use strict';

const fs = require('fs');

module.exports = (file1, file2, options) => {

  return new Promise((resolve, reject) => {

    let crypto;

    try {
      crypto = require('crypto');
    } catch (err) {
      reject('crypto support is required to use Filessert.');
    }

    const config = Object.assign({
      algorithm: 'sha256'
    }, options);

    const hash1 = crypto.createHash(config.algorithm).update(fs.readFileSync(file1)).digest('utf8');
    const hash2 = crypto.createHash(config.algorithm).update(fs.readFileSync(file2)).digest('utf8');

    if (hash1 === hash2) {
      resolve();
    } else {
      reject('Files to not match.');
    }

  });


};
