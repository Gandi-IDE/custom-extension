const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const STATIC_PATH = process.env.STATIC_PATH || '/static';
const baseConfig = require('./webpack.base.config');
module.exports = {
  ...baseConfig,
  mode: 'production',
  target: 'web',
  entry: {
    'custom-extensions': './src/publish.ts'
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve('dist'),
    publicPath: `${STATIC_PATH}/`
  }
}