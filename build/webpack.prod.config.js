const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig,{
  mode: 'production',
  plugins: [
    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件
      template: 'index.html',
      inject: true // 参照最初创建的 .html 来生成 .html
    })
  ]
});