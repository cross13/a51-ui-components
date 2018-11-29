const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

const hwp = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html'
});

const clean = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
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
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
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
    new DashboardPlugin(),
    hwp
  ]
};