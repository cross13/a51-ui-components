const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
var nodeExternals = require('webpack-node-externals');

const clean = new CleanWebpackPlugin(['build']);

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.tsx')
  ],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: [
            'babel-loader',
            {
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true,
                    useBabel: false, // !important!
                    getCustomTransformers: () => ({
                        before: [tsImportPluginFactory({
                            libraryName: 'antd',
                            libraryDirectory: 'lib',
                            style: true,
                        })],
                    }),
                },
            },
        ],
      },
      {
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
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true
            }
        }]
      }
    ]
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.scss']
  },
  output: {
    path: path.resolve(__dirname, './build/lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    clean
  ]
};