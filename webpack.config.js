const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      cote: path.join(__dirname, 'src'),
      'styled-components': require.resolve('./node_modules/styled-components')
    }
  },
  externals: {
    // react: 'react',
    // 'react-dom': 'react-dom',
    // 'styled-components': 'styled-components'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'docs/'
  }
};
