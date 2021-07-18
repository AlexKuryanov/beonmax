'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  watch: true,

  devtool: "source-map"
};
