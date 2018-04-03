const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    // Display only errors to reduce the amount of output.
    // stats: 'errors-only',
    overlay: true,

    // open: true, // Open the page in browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};
