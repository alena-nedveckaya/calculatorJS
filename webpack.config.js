const path = import('path');
const HtmlWebpackPlugin = import('html-webpack-plugin');

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Удаляет старый выходной каталог перед сборкой
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      cache: false,
    }),
  ],

  devServer: {
    hot: true, // Включаем горячую перезагрузку
  },

  mode: 'development',
};
