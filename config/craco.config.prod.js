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
      // 修改 output
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          filename: 'static/js/[name].js',
        },
      }
      // 关闭 devtool
      webpackConfig.devtool = false,
      // 配置 splitChunks
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        ...{
          runtimeChunk: false,
        },
      }
      // 覆盖已经内置的 plugin 配置
      webpackConfig.plugins.map((plugin) => {
         whenProd(() =>{
          if (plugin instanceof HtmlWebpackPlugin) {
            if (plugin.options){
            Object.assign(plugin.options, 
              {
                //inject: true,
              	filename: 'popup.html',
              	//chunks: ['main'],
                template: path.resolve(__dirname, './public/index.html'),
              });
            }
          }
        });
        return plugin
      })
      return webpackConfig
    },
  }
}


