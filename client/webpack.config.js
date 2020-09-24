
const path = require('path');


module.exports = {

  mode: 'development',

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, './'),
    publicPath: '/dist/',
    compress: true,
    port: 8080,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};
