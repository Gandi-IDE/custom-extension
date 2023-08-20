const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
module.exports = {
  ...baseConfig,
  mode: 'production',
  entry: {
    main: {
      import: './src/index.ts',
      library: {
        name: 'ExtensionLib',
        type: 'umd',
      },
      
    },
  },
  output: {
    filename: ({contentHashType, chunk}) => {
      return `static/js/${contentHashType === 'javascript' && chunk.name === 'main' ? '[name].js' : '[name].[contenthash:8].js'}`
    },
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    // publicPath: 'http://127.0.0.1:9999/',
    publicPath: '/',
    path: path.resolve('./dist'),
    globalObject: 'this',
  },
  devServer: {
    host: '0.0.0.0',
    port: 9999,
    static: 'static',
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'DEPLOY_ENV': '"dev"',
    })
  ])
}