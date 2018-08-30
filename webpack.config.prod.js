const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        test: /\.js($|\?)/i,
        sourceMap: true
      })
    ]
  }
}
