var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React 101',
      template: './src/templates/index.html'
    })
  ],
  module: {
    loaders : [
       {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve : {
    root: [path.resolve('./src'),]
  }
};
