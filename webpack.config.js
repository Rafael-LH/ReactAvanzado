const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

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
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@gql': path.resolve(__dirname, './src/gql'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@container': path.resolve(__dirname, './src/Container'),
        '@RP': path.resolve(__dirname, './src/RP')
      }
    },
    devtool: argv.mode === 'development' ? 'source-map' : '',
    devServer: {
      port: 8080,
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
        template: './src/index.html',
        filename: 'index.html'
      }),
      new WebpackPwaManifestPlugin({
        name: 'Petgram tu app de fotos de mascotas.',
        shotname: 'Petgram 🐶',
        description: 'Fotos de animalitos bonitos',
        background_color: '#fff',
        theme_color: '#b1a',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('icons'),
            purpose: 'any maskable',
            ios: true
          }
        ]
      }),
      new WorkboxWebpackPlugin.GenerateSW({
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://res.cloudunary.com|images.unsplasj.com'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'images'
            }
          },
          {
            urlPattern: new RegExp('https://petgram-server-lh.rafael-lh.vercel.app/graphql'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api'
            }
          }
        ]
      })
    ]
  }
}
