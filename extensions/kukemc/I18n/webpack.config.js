// webpack.config.js

const path = require('path');

module.exports = {
  entry: {
    I18n_dev : './index.js', //开发调试用
    I18n_prd : './extension.js',//发布用
  }, // 指定项目的入口文件
  output: {
    filename: '[name].js', // 打包后的输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除对node_modules中模块的处理
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 使用Babel将ES6+语法转为浏览器兼容的语法
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      moment$: path.resolve('./node_modules/moment/moment.js'), // 如果需要解决moment库的别名引用问题
    },
    fallback: { // 对于不支持动态import的环境提供polyfill
      "path": require.resolve("path-browserify"),
    },
  },
};