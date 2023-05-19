module.exports = {
  mode: 'production',
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
          limit: 25000,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".png",".svg",".gif",".jpg",".jpeg",".css"],
  },
  plugins: [],
}