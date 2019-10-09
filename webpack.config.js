const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    'test': './test.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `test.html`,
      template: `./test.html`,
    }),
  ],
};
