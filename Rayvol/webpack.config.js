const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: { 
        import: './src/js/index.js',
        dependOn: 'shared',
      },
        camera: {
          import: './src/js/Camera.js',
          dependOn: 'shared',
        },
        renderer: {
          import: './src/js/Renderer.js',
          dependOn: 'shared',
        },
        scene: {
          import: './src/js/Scene.js',
          dependOn: 'shared',
        },
        controls: {
          import: './src/js/Controls.js',
          dependOn: 'shared',
        },
        main: {
          import: './src/js/Nebula.js',
          dependOn: 'shared',
        },
        main: {
          import: './src/js/Planet.js',
          dependOn: 'shared',
        },
        main: {
          import: './src/js/Galaxy.js',
          dependOn: 'shared',
        },
        main: {
          import: './src/js/Responsive.js',
          dependOn: 'shared',
        },
        main: {
          import: './src/js/main.js',
          dependOn: 'shared',
        },
       
        shared: ['lodash','three'],
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Rayvol',
            filename: './index.html'
        }),
      ],
  output: {
    
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [

      //html
      {
        test: /\.html$/i,
        loader: "html-loader",
        generator: {
          filename: "[name][ext]",
        },
      },

      //css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      //images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "[name][ext]",
        },
      },

      //fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      // Shaders
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use:
        [
            'raw-loader',
            'glslify-loader'
        ]
    }
    ],
  },
};