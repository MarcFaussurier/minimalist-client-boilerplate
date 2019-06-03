import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.config.js';

export default merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/littlefix.tsx',
    'webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr',
    './src/index.tsx'
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
