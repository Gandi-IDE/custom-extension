const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    main: {
      import: './src/index.ts',
      library: {
        name: 'ExtensionLib',
        type: 'var',
      },
    },
  },
  output: {
    // library: 'ExtensionLib',
    filename: ({contentHashType, chunk}) => {
      return `static/js/${contentHashType === 'javascript' && chunk.name === 'main' ? '[name].js' : '[name].[contenthash:8].js'}`
    },
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    publicPath: '/',
    path: path.resolve('./dist'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 9999,
    static: 'static',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|bin|png|svg|gif|jpe?g)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          name: 'static/assets/[name].[hash:8].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".png",".svg",".gif",".jpg",".jpeg",".css"],
  },
  plugins: [],
}