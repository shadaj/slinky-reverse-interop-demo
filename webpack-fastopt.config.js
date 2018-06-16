var merge = require('webpack-merge');
var core = require('./webpack-core.config.js')
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(core, {
  entry: {
    "dependencies": ["./reverse-interop-demo-fastopt-entrypoint.js"],
    "reverse-interop-demo-fastopt": [ path.resolve(__dirname, "../../../../main.jsx") ]
  },
  resolve: {
    alias: {
      "scalajs": path.resolve(__dirname, "hot-launcher.js")
    }
  },
  output: {
    path: __dirname,
    filename: "[name]-library.js",
    library: "appLibrary",
    libraryTarget: "var"
  },
  devtool: "source-map",
  module: {
    noParse: (content) => {
      return content.endsWith("-fastopt.js");
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../../../public/index-fastopt.html"),
      inject: false
    })
  ]
})
