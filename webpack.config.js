const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src',
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      'utils': path.resolve(__dirname, './src/components/Utils'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, "src")],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 3 versions', 'sass-loader'],
      },
      {
        test: /\.(eot|gif|jpeg|jpg|png|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]',
      }
    ]
  },
  devServer: {
    port,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/reacter': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};
