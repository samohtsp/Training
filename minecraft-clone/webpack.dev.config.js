const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

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

  entry: {
    app: {
      import: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        "./src/js/index.js",
        "./src/js/main.js",
        "./src/js/Responsive.js",
      ],
      dependOn: "shared",
    },
    minecraft: {
      import: [
        "./src/js/Block.js",
        "./src/js/Storage.js",
        "./src/js/Landscape.js",
        "./src/js/Plant.js",
        "./src/js/tree.js",
        "./src/js/Controls.js",
        "./src/js/Player.js",
      ],
      dependOn: "shared",
    },
    threeDpack: {
      import: [
        "./src/js/Camera.js",
        "./src/js/Scene.js",
        "./src/js/Renderer.js",
      ],
      dependOn: "shared",
    },
    shared: ["lodash", "three", "cannon-es"],
  },

  output: {
    filename: "js/[name].bundle.js",
    path: PATHS.build,
    //clean: true,
    publicPath: "/",
    //assetModuleFilename:'[file]'
  },

  optimization: {
    runtimeChunk: "single",
  },
  mode: "development",
  devtool: "inline-source-map",
  target: "web",

  // Developement Server
  // devServer: {
  //   static: PATHS.build,
  //   hot: false,
  //   watchFiles: ["src/js/*.js"],
  //   liveReload: true,
  //   https: true,
  //   port: 9000,
  // },

  //Plugins
  plugins: [
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Minecraft clone",
      filename: "./index.html",
      excludeChunks: ["server"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  //Loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      //html
      {
        test: /\.html$/i,
        loader: "html-loader",
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

      //fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/font",
      },
    ],
  },
};
