const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin =  require('webpack-pwa-manifest')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@api': path.resolve(__dirname, './api')
    }
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
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
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram tu app de fotos de mascotas.',
      shotname: 'Petgram 🐶',
      description: 'Fotos de animalitos bonitos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons:[
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
}
