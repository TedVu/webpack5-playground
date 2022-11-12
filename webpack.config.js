const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    //publicPath: "dist/", // this is the default in webpack5 it will look get the path from dist directory
    // public path can also be a CDN
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg|ttf|eot|svg|woff(2)?)(\S+)?$/,
        type: "asset/inline",
      },
    ],
  },
};
