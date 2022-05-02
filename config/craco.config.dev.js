const path = require("path");
const rootPath = path.join(__dirname, "..");
const srcPath = path.join(rootPath, "src");
const webpack = require("webpack");
const config = require("./mv3-hot-reload.config");
const srcDir = path.join(__dirname, "../src");
const outDir = path.join(__dirname, "../build");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
const isDev = process.env.NODE_ENV === "development";
function getEntry(name) {
  return [
    path.join(srcPath, name),
    ...(isDev ? [`mv3-hot-reload/${name}`] : []),
  ];
}

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = {
        main: [
          env === "development" &&
            require.resolve("react-dev-utils/webpackHotDevClient"),
          paths.appIndexJs,
        ].filter(Boolean),
        background: [
          path.join(srcDir, "background_script", "index.tsx"),
          "mv3-hot-reload/background",
        ],
        content: [
          path.join(srcDir, "content_script", "index.tsx"),
          "mv3-hot-reload/content",
        ],
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          path: outDir,
          filename: "static/js/[name].js",
        },
      };

      //webpackConfig.devtool = false,

      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        ...{
          runtimeChunk: false,
        },
      };

      return webpackConfig;
    },
    plugins: [
        new webpack.EnvironmentPlugin({
          MV3_HOT_RELOAD_PORT: config.port,
        }),
      ],
  },

};
