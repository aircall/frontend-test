const webpack = require('webpack');
const path = require('path')

// PUGINS WEBPACK
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: './index.html'
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
    chunkFilename: "[id].css"
});



const ignoreMomentBuild = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|fr/)

const injectENV = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
})

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
  mode: env || 'development', // on définit le mode en fonction de la valeur de NODE_ENV
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  },
  entry: './src/index.jsx',
  devServer: {
    port: process.env.PORT || 8080,
    historyApiFallback: true
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
    performance: {
       maxEntrypointSize: 400000,
       maxAssetSize: 500000
    },
  optimization: optimMinizer,
  plugins: [
    new CleanWebpackPlugin(),
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    ignoreMomentBuild,
    new BundleAnalyzerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    injectENV
  ]
}
