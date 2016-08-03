var ExtractTextPlugin = require('extract-text-webpack-plugin');
// require("./assets/styles.scss");

module.exports = {
  entry: ['./src/index.js', './assets/styles.scss'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      //match both .js and .jsx files
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [ 'es2015', 'react', 'stage-1' ]
      }

    },
      {
        test: /\.scss$/,
        include: /assets/,
        // loader: [ 'styles', 'css', 'sass' ]
        loader: ExtractTextPlugin.extract("style", "css!sass")
        // test: /\.scss$/,
        // loader: "style!css!sass"
        // loaders: ["style", "css", "sass"]
      }]
  },
  resolve: {
    extensions: [ '', '.js', '.es6', '.jsx', '.css' ]
  },
  plugins: [
    new ExtractTextPlugin("/assets/styles.css")
  ]
}