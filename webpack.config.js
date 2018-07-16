/* eslint-disable */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      APP_DIR,
      NODE_MODULES_DIR
    ],
    extensions: ['.js', '.json', '.jsx', 'scss']
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
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
      }
    ]
  },
  devServer: {
    compress: true,
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
