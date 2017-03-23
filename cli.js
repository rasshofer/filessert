#!/usr/bin/env node

'use strict';

const nconf = require('nconf');
const leprechaun = require('leprechaun');
const filessert = require('./filessert');

const config = nconf.argv().env().get();

if (!config || !config._ || config._.length !== 2) {

  leprechaun.error('Please specify two files for comparison.');
  process.exit(1);

} else {

  filessert(config._[0], config._[1], config).then(() => {
    leprechaun.success(`'${config._[0]}' and '${config._[1]}' do match.`);
  }).catch(() => {
    leprechaun.error(`'${config._[0]}' and '${config._[1]}' do not match.`);
    process.exit(1);
  });

}
