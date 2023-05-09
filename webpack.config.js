const path = require('path');

module.exports = {
  entry: './src/main.js', // Vue.jsのエントリーファイルのパスを指定
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // ビルドされたファイルの名前
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js', // Vue.jsのバージョンに応じてパスを変更
    },
  },
};