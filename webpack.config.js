const path = require("path");
// eslint-disable-next-line no-unused-vars
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    DOM: "./src/DOM.js",
  },
  devtool: "inline-source-map",
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Battleship",
  //   }),
  // ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
