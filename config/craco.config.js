const path = require('path');
const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const webpack = require('webpack');

module.exports = {
    webpack: {
      configure: (webpackConfig, {env, paths}) => {
        return {
          ...webpackConfig,
          entry: {
            main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
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
          }
        }
      },
    }
  }
  