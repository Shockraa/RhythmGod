const path = require('path');

module.exports = {
  mode: "development", // or "production"

  entry: {
    main: './src/index.js', // arquivo inicial
    game: './src/game.js', // jogo
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        test: /\.css$/,
      use: ['style-loader', 'css-loader'],
        use: {
          loader: "babel-loader",
        }
      },
    ],
  },

  devtool: false, // for readability

  devServer: {
    static: './dist',
  },
};