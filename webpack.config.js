module.exports = {
  entry:'./index.js',
  output: {
    path: './public',
    filename: 'brundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
