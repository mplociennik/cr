var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './resources/assets/js/index.js',
  output: { path: __dirname, filename: 'public/js/index.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};