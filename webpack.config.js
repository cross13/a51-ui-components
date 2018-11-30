const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');

const hwp = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html'
});

const clean = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: path.join(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      }, {
        test: /\.(s*)css$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: [
              path.join(__dirname, 'src'),
            ],
          },
        }],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    }
  },
  plugins: [
    clean,
    hwp,
    new DashboardPlugin()
  ]
};