/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const mode = process.env.ENV;
const port = process.env.PORT;
const name = process.env.PROJECT_NAME;

if ([port, name].includes(undefined)) {
  throw new Error('Environment is not set correctly. You must provide ENV, PORT, and PROJECT_NAME environment variables.');
}

const appConfig = {
  mode,
  context: __dirname,
  entry: {
    [name]: [
      './src/scripts/app.js',
    ],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets/',
    filename: '[name].[fullhash].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
      // Stylesheets.
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          // `css-loader` resolves paths in CSS and adds assets as dependencies.
          {
            loader: 'css-loader',
            options: { sourceMap: true, import: false },
          },
          // `postcss-loader` is used to autoprefix CSS to ensure compatibility with all browsers.
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-sort-media-queries'], ['autoprefixer']],
                sourceMap: true,
              },
            },
          },
          // `sass-loader` converts SASS syntax into CSS.
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(svg)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${name}.[fullhash].bundle.css`,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      environment: mode,
      // chunks: ['app'],
      filename: path.resolve('./dist/', 'index.html'),
      template: path.resolve('./src/', 'html/index.html.ejs'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  node: false,
  performance: {
    hints: false,
  },
};

module.exports = appConfig;
