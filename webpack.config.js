const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
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
            use: ['style-loader', 'css-loader?importLoaders=true']
          },
          {
            use: ['style-loader', 'css-modules-typescript-loader', {
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
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
