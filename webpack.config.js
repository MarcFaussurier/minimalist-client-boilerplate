import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg|ico|ttf|eot|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
    })
  ]
};
