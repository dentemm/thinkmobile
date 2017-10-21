const path = require('path');

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}