const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    extension: './src/extension.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: '/',
    path: path.resolve('./dist'),
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|bin|png|svg|gif|jpe?g)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          limit: 250000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.png', '.svg', '.gif', '.jpg', '.jpeg', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEPLOY_ENV: `"${process.env.DEPLOY_ENV || 'prd'}"`,
    }),
  ],
};
