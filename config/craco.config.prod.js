/* craco.config.js */
const path = require('path');
const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const webpack = require('webpack');
const { whenDev, whenProd, when } = require('@craco/craco')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  babel: {},
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = {
        main: [env === 'development' && 
          // Hot Reload
          require.resolve('react-dev-utils/webpackHotDevClient'),
          // Entry Point
          paths.appIndexJs].filter(Boolean),
        content: path.join(srcPath, 'content_script', 'index.tsx'),
        background: path.join(srcPath, 'background_script', 'index.tsx'),

      }
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          filename: 'static/js/[name].js',
        },
      }

      //webpackConfig.devtool = false,

      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        ...{
          runtimeChunk: false,
        },
      }
      return webpackConfig
    },

    plugins: [
      // Generates an new file 'popup.html' with the <script> injected.
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            chunks: ['main'],
            template: path.resolve(__dirname, '../public/index.html'),
            filename: "popup.html",
          },
        )
      ),
    ],
  }
}

