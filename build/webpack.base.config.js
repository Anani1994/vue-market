// 修改 webppack 配置文件后需重启才能生效
const path = require('path'); // node.js 中的基本包，用于处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  entry: path.join(__dirname,'../src/main.js'),
  output: {
    // filename: 'bundle.js', //输出文件的文件名
    path: path.join(__dirname,'../dist'), // 输出文件所在目录
    // publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // 为 css 创建 style 标签并置入其中插入页面
          'style-loader',
          // 处理 css
          'css-loader',
          // 浏览器兼容问题
          'postcss-loader',
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
          // loader 由下往上依次开始处理
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              // 前者防止在每个文件都插入辅助代码 后者支持路由懒加载
              plugins: ['transform-runtime','syntax-dynamic-import']
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            // 配置参数
            options: { 
              // 比较标准，小于标准的图片转换为 base64 代码
              limit: 1024 
            }
          }
        ]
      },
      // 管理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
    new VueLoaderPlugin(),
  ]
}