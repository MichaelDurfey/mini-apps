var path = require('path');
var webpack = require ('webpack');

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
        }
        }
      }
    ]
  }
};