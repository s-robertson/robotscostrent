var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + '/../web/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8000/',
        files: '../app/Resources/**/*.html.twig'
      }
    )
  ]
};
