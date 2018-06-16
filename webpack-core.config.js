var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    "filename": "[name]-bundle.js"
  },
  resolve: {
    alias: {
      "resources": path.resolve(__dirname, "../../../../src/main/resources")
    },
    modules: [ path.resolve(__dirname, "./node_modules") ]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "babel-preset-es2015",
            "babel-preset-react"
          ].map(require.resolve)
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "../../../../public") }
    ])
  ]
}
