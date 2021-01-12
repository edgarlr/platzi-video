const path = require('path');
const nodeExternals = require('webpack-node-externals');
require('dotenv').config();

module.exports = {
  entry: './api/index.js',
  mode: process.env.ENV,
  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'api/dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
};
