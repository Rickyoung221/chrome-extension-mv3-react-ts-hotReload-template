const path = require('path');
const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const webpack = require('webpack');


module.exports = {
    webpack: {
      configure: (webpackConfig, {env, paths}) => {
        return {
          ...webpackConfig,
          //The "root" entry points to the application
          entry: {
            main: [env === 'development' && 
              // Hot Reload
              require.resolve('react-dev-utils/webpackHotDevClient'),
              // Entry Point
              paths.appIndexJs].filter(Boolean),
            content: path.join(srcPath, 'content_script', 'index.tsx'),
            background: path.join(srcPath, 'background_script', 'index.tsx'),
            popup: path.join(srcPath, 'popup', 'index.tsx'),
          },
          output: {
            ...webpackConfig.output,
            filename: 'static/js/[name].js',
          },
          optimization: {
            ...webpackConfig.optimization,
            runtimeChunk: false,
          },
        }
      },
    },
    resolve:{
      //... Doesn't work yet, need to check
      alias: {
        background: path.resolve(__dirname, 'src/background_script/'),
        content: path.resolve(__dirname, 'src/content_script/'),
        popup: path.resolve(__dirname, 'src/popup/'),
      },
    }
  }
  