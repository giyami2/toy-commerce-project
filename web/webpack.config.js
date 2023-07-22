const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      publicPath: '/',
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true,
                removeComments: true,
              }
            : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
