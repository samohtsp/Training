const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "./dist"),
};

module.exports = {
  //Main
  //context: path.resolve(__dirname, 'src'),
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
      import: ["./src/js/index.js", "./src/js/main.js"],
      dependOn: "shared",
    },
    physics: {
      import: ["./src/js/ammo.js"],
      dependOn: "shared",
    },
    minecraft: {
      import: [
        "./src/js/Block.js",
        "./src/js/Landscape.js",
        "./src/js/Plant.js",
        "./src/js/tree.js",
        "./src/js/Scene.js",
        "./src/js/Controls.js",
        "./src/js/Player.js",
      ],
      dependOn: "shared",
    },
    threeDpack: {
      import: [
        "./src/js/Camera.js",
        "./src/js/Renderer.js",
        "./src/js/Responsive.js",
      ],
      dependOn: "shared",
    },
    shared: ["lodash", "three", "cannon-es"],
  },

  output: {
    filename: "[name].bundle.js",
    path: PATHS.build,
    clean: true,
    publicPath: "/",
    //assetModuleFilename:'[file]'
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
    new HtmlWebpackPlugin({
      title: "Minecraft clone",
      filename: "./index.html",
    }),
  ],

  //Loaders
  module: {
    rules: [
      //html
      {
        test: /\.html$/i,
        loader: "html-loader",
        generator: {
          filename: "file?name=[name].[ext]",
        },
      },

      //css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
