// Download whitelist from http://iframely.com/qa/whitelist.json
//
'use strict';
/* eslint-disable no-console */


const http   = require('http');
const fs      = require('fs');
const path    = require('path');


const URL = 'http://www.unicode.org/Public/security/latest/confusables.txt';
const SAVE_PATH = path.join(__dirname, 'data.json');


console.log('Downloading: ' + URL + ' ...');

// Parse & save mappings
function save(str) {
  let result = {};

  console.log('Writing data...');

  str.split(/\r?\n/g)
    .filter(line => line.length && line[0] !== '#')
    .forEach(line => {
      if (line.split(';').length < 2) return;

      let [ src, dst ] = line.split(';').slice(0, 2).map(s => s.trim());

      src = String.fromCodePoint(parseInt(src, 16));
      dst = dst
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(code => !code ? '' : String.fromCodePoint(parseInt(code, 16)))
        .join('');
      result[src] = dst;
    });


  fs.writeFileSync(SAVE_PATH, JSON.stringify(result, null, '  '));
  console.log('Done!');
}

// Download
http.get(URL, function (res) {
  if (res.statusCode !== 200) {
    console.error('Bad response code: ' + res.statusCode);
    process.exit(1);
  }

  let data = [];

  res.setEncoding('utf8');

  res
    .on('data', chunk => data.push(chunk))
    .on('error', err => { console.error(err); process.exit(1); })
    .on('end', () => save(data.join('')));
});
