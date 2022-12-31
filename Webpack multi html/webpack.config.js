const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Pages = ["about", "contact", "projects"];
const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "./dist"),
};

module.exports = {
  //Main
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
  },
  mode: "development",
  devtool: "inline-source-map",

  entry: {
    app: {
      import: ["./src/js/index.js"],
      dependOn: "shared",
    },
    shared: ["lodash"],
  },

  output: {
    filename: "js/[name].bundle.js",
    path: PATHS.build,
    clean: true,
    publicPath: "/",
  },

  optimization: {
    runtimeChunk: "single",
  },

  // Developement Server
  devServer: {
    static: __dirname,
    hot: false,
    liveReload: true,
    https: true,
    port: 9000,
  },

  //Plugins
  plugins: [
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      inject: true,
      //chunks: ["index"],
      filename: "./index.html",
    }),
    /*new HtmlWebpackPlugin({
      template: "./src/html/about.html",
      inject: true,
      //chunks: ["about"],
      filename: "./html/about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/contact.html",
      inject: true,
      //chunks: ["contact"],
      filename: "./html/contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/projects.html",
      inject: true,
      //chunks: ["projects"],
      filename: "./html/projects.html",
    }),*/
  ].concat(
    Pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/html/${page}.html`,
          filename: `./html/${page}.html`,
          //chunks: [page],
        })
    )
  ),

  //Loaders
  module: {
    rules: [
      //html
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      //images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
        generator: {
          filename: (content) => {
            return content.filename.replace("src/", "");
          },
        },
      },
      //css
      {
        test: /\.css$/i,
        generator: {
          filename: (content) => {
            return content.filename.replace("src/", "");
          },
        },
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      //fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/font",
      },
    ],
  },
};
