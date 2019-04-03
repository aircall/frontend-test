const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// PLUGINS WEBPACK
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  inject: true,
  hash: true,
  template: './public/index.html',
  filename: './index.html'
});

const loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
})



  /*Optim load MomentJs */
const ignoreMomentBuild = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|fr/)
const mergeChunks = new webpack.optimize.AggressiveMergingPlugin()

// OPTIMIZER 
const optimMinizer = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: true
      },
      sourceMap: false
    })
  ]
}

const env = process.env.NODE_ENV;
const jsSourcePath = path.join(__dirname, './src')
module.exports = {
  mode: env || 'development',
  entry: {
    js: jsSourcePath + '/index.jsx',
    vendor: [
      'babel-polyfill',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 8080
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 500000
  },
  optimization: optimMinizer,
  plugins: [
    ignoreMomentBuild,
    htmlWebpackPlugin,
    loaderOptionsPlugin,
    mergeChunks
  ]
}
