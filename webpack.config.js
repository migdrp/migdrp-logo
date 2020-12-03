/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    'test-component': ['./src/public/test-component.ts'],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src/public'), path.resolve(__dirname, 'src/component')],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        threejs: { test: /[\\/]node_modules[\\/]((three).*)[\\/]/, name: 'threejs', chunks: 'all' },
      },
    },
  },
  output: {
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
      watch: true,
    }),
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
};

const productionConfig = {
  mode: 'production',
  entry: {
    'test-component': ['./src/public/test-component.ts'],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src/public'), path.resolve(__dirname, 'src/component')],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        threejs: { test: /[\\/]node_modules[\\/]((three).*)[\\/]/, name: 'threejs', chunks: 'all' },
      },
    },
  },
  output: {
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
      watch: true,
    }),
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
};

let config;

if (process.env.NODE_ENV === 'production') {
  config = productionConfig;
} else if (process.env.NODE_ENV === 'development') {
  config = developmentConfig;
}

module.exports = config;
