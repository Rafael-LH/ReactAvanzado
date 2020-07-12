const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.js|jsx$/,
        loader: 'babel-loader'
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
