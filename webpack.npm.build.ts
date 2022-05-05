import path from 'path';
import { Configuration, ProgressPlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


const config: Configuration = {
  mode: 'production',
  entry: {
    'index': ['./src/index.ts'],
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
        include: [path.resolve(__dirname, 'src/')],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    libraryTarget:'umd',
  },
  externals:[
    'three',
    'three.meshline'
  ],
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
    })
  ],
};

export default config;