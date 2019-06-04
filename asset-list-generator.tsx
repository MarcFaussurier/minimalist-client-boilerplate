import compression from 'compression';
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import configDev from './webpack-dev';
import * as glob from 'glob';
import fs from 'fs';

const isProd = process.env.NODE_ENV === 'production';
let files: Array<string>;
if (!isProd) {
  files = [ '/main.js', '/main.css'];
} else {
  files = [ ... glob.sync(__dirname + '/www/dist/*.css'), ... glob.sync(__dirname + '/www/dist/*.js')];
  files.forEach((element, index) => {
    files[index] = element.split(__dirname + "/www")[1];
  });
}
fs.writeFileSync(__dirname + "/www/asset-list.js", "var files = \"" + Buffer.from(JSON.stringify(files)).toString('base64') + "\"; files = JSON.parse(window.atob(files));");

console.log("Asset list generated with " + files.length + " assets.");