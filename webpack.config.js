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
  /*Optim load MomentJs */
const ignoreMomentBuild = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|fr/)
const mergeChunks = new webpack.optimize.AggressiveMergingPlugin()

// OPTIMIZER 
const optimMinizer = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
}

const env = process.env.NODE_ENV;
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
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
    mergeChunks
  ]
}
