import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index',
    './assets/scss/styles.scss'],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("/assets/css/styles.css")
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loaders: [
        'babel'
        ],
      query: {
        presets: [ 'es2015', 'react', 'stage-1' ]
      }

    },
      {
        test: /\.scss$/,
        include: /assets/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }]
  },
  resolve: {
    extensions: [ '', '.js', '.es6', '.jsx', '.css' ]
  }
};