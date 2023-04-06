const path = require('path');

module.exports = {
  entry: './src/editorjs-columns.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'editorjs-columns.bundle.js',
    library: 'editorjsColumns',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.svg$/, loader: "svg-inline-loader" }
    ]
  },
  // node: { global: true, fs: 'empty' },
  // optimization: {
  //   minimize: false
  // },
};
