const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  // optimization: {
  //   concatenateModules: false
  // },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader?minimize']
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /global/,
            use: [MiniCssExtractPlugin.loader, 'css-loader?importLoaders=true']
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-modules-typescript-loader', {
              loader: 'css-loader',
              options: { modules: { localIdentName: '[name]_[local]_[hash:base64:3]' } }
            }]
          }
        ]
      },
      {
        test: /\.([jt]s|[jt]sx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'react-svg-loader?jsx']
      }
    ]
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
    new GenerateSW(),
    new WebpackPwaManifest({
      name: 'Aircall activity feed',
      short_name: 'Aircall',
      description: 'Monitor Aircall\'s inbound & outbound calls.',
      theme_color: '#233142',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      icons: [
        {
          src: path.resolve('src/img/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
  ]
};
