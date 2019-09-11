const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html"
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(jpg|png|jpeg|bmp|gif)$/,
        use: ["url-loader?limit=1000&name=[hash:8]-[name].[ext]"]
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg)$/,
        use: "url-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        //  排除node_modules中的js
        exclude: /node_modules/
      }
    ]
  }
};
