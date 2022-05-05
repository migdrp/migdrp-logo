import path from 'path';
import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


const config: any = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    'test-component': ['./test/test-component.ts'],
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
        include: [path.resolve(__dirname, 'test')],
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    port:2503,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    }
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
    }),
    new HtmlWebpackPlugin({
      template: './test/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
};

export default config;