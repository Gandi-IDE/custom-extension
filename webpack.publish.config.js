const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const STATIC_PATH = process.env.STATIC_PATH || '/static';
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
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
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'DEPLOY_ENV': '"prod"',
    })
  ])
}