/* eslint-disable prefer-template */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    // path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
    hash: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Todo App',
      template: './src/index.ejs',
      inject: 'body',
    }),
    // new HtmlWebpackPlugin({
    //   // filename: 'index1.html',
    //   title: 'Angular 2 Todo App',
    //   template: './src/index1.ejs',
    //   inject: 'body',
    // }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
