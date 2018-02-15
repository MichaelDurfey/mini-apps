const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "client"),
      },
    ],
  },
};
