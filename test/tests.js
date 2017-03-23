const fs = require('fs');
const path = require('path');
const tap = require('tap');
const filessert = require('../filessert');

// API

tap.equal(typeof filessert, 'function');
tap.equal(filessert(path.resolve(__dirname, 'test1.txt'), path.resolve(__dirname, 'test1.txt')) instanceof Promise, true);

// Comparison

tap.test('Matching files', (childTest) => {
  filessert(path.resolve(__dirname, 'test1.txt'), path.resolve(__dirname, 'test1.txt')).then(() => {
    childTest.end();
  }).catch((e) => {
    throw e;
  });
});

tap.test('Mismatching files', (childTest) => {
  filessert(path.resolve(__dirname, 'test1.txt'), path.resolve(__dirname, 'test2.txt')).then(() => {
    throw new Error();
  }).catch(() => {
    childTest.end();
  });
});
