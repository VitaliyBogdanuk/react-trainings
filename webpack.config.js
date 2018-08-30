const path = require('path')
// const dev = require('./webpack.config.dev.js')
// const prod = require('./webpack.config.prod.js')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const mode = process.env.WEBPACK_MODE
const config = ((mode === 'production') ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js'))

module.exports = merge(config, {
  entry: {
    app: './src/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['app']),
    new HtmlWebpackPlugin({
      title: 'React-trainings',
      filename: 'index.html',
      template: './dist/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app')
  }
})
