const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
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
     publicPath: 'http://127.0.0.1:9999/',
    publicPath: '/',
    path: path.resolve('./dist'),
    globalObject: 'this',
  },
  devServer: {
    host: '127.0.0.1',
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
          limit: 25000000,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".png",".svg",".gif",".jpg",".jpeg",".css"],
  },
  plugins: [],
}
