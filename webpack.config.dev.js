import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index',
    './assets/scss/styles.scss'
    ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './src'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loaders: [
        'babel'
        ]
      // query: {
      //   presets: [ 'es2015', 'react', 'stage-1' ]
      // }

    },
      {
        test: /\.scss$/,
        // include: /assets/,
        // loader: ExtractTextPlugin.extract("css!sass")
        loader: 'style!css!sass'
        // loaders: [
        //   'style',
        //   'css',
        //   'sass'
        // ]
      }]
  },
  resolve: {
    extensions: [ '', '.js', '.es6', '.jsx', '.css', '.scss' ]
  },
  plugins: [
    // new ExtractTextPlugin("/dist/styles.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ]
};