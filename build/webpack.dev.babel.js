import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base.babel';

export default merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './littlefix.js',
    'webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr',
    './src/client/index.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});