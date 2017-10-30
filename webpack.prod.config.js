const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[chunkhash:12].css'
});

module.exports = {
  devtool: 'eval',
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    src: path.resolve(__dirname, './src')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  plugins: [
    extractTextPlugin,
    new HtmlWebpackPlugin({ template: './template/index.html' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[chunkhash:12].js' }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
        use: extractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]',
      }
    ]
  }
};
