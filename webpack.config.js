const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (_, argv) => {
  console.log(argv.mode)
  return {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, './src/Components'),
        '@hooks': path.resolve(__dirname, './src/hooks')
      }
    },
    devtool: argv.mode === 'development' ? 'source-map' : '',
    devServer: {
      port: 3000,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          exclude: /(node_modules|bower_components)/,
          test: /\.js$/,
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
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html'
      })
    ]
  }
}
