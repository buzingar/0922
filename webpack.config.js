const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// 创建一个插件的实例
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"), // 源文件
  filename: "index.html" // 生成的内存中首页的名称
});

// webpack默认只能打包处理.js后缀名类型的文件，像.png 等无法主动处理，所以要配置第三方loader
module.exports = {
  mode: "production", // production development
  plugins: [htmlPlugin],
  module: {
    // 所有第三方模块的配置规则
    rules: [
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"] // 这几个文件的后缀名可以省略
    alias: {
      '@': path.join(__dirname, './src') // @表示项目根目录下的src目录
    }
  }
};
