const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'sub',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/App'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript']
            }
          },
          'ts-loader'
        ],
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
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
