const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        sub: 'sub@http://localhost:3001/remoteEntry.js'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
  }
};
