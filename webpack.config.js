const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './index'
  },

  devServer: {
    contentBase: [
      path.join(__dirname, "public"),
      path.join(__dirname, "dist")
    ],
    compress: true,
    port: 3000,
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
