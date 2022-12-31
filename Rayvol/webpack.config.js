const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  mode: "development",
  devtool: "inline-source-map",

  entry: {
    app: {
      import: [
        "./src/js/index.js",
        "./src/js/main.js",
        "./src/js/Responsive.js",
      ],
      dependOn: "shared",
    },
    threeDpack: {
      import: [
        "./src/js/Camera.js",
        "./src/js/Scene.js",
        "./src/js/Renderer.js",
        "./src/js/Responsive.js",
      ],
      dependOn: "shared",
    },
    galaxy: {
      import: [
        "./src/js/Controls.js",
        "./src/js/Planet.js",
        "./src/js/Galaxy.js",
        "./src/js/Nebula.js",
      ],
      dependOn: "shared",
    },

    shared: ["lodash", "three"],
  },
  output: {
    filename: "js/[name].bundle.js",
    path: PATHS.build,
    clean: true,
    publicPath: "/",
    //assetModuleFilename:'[file]'
  },

  // Outputs rules
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
      title: "Galaxy",
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
        type: "asset/resource",
      },

      // Shaders
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
    ],
  },
};
