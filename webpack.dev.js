var defaults = require('./webpack.common.js');
var extend = require('merge');
var webpack = require('webpack');


module.exports = extend(defaults, {
  devtool: 'cheap-eval-source-map',
  entry: ['webpack-dev-server/client?http://localhost:8080'].concat(defaults.entry),
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: defaults.module.loaders.concat([
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ])
  },
  plugins: defaults.plugins.concat([
    new webpack.DefinePlugin({
      __PROD__: false,
      __DEV__: true
    })
  ])
});