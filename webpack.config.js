const path = require('path');
let SRC = path.resolve(__dirname, 'src/main/js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
      test: /\.mp3$/,
      include: SRC,
      loader: 'file-loader'
    },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
};
