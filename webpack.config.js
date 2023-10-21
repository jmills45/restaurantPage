const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        // define templates here
        index: {
          // => dist/index.html
          import: 'src/index.html', // template file
        },
      },
      js: {
        // output filename of compiled JavaScript, used if `inline` option is false (defaults)
        filename: './scripts/main.js',
        //inline: true, // inlines JS into HTML
      },
      css: {
        // output filename of extracted CSS, used if `inline` option is false (defaults)
        filename: './style.css',
        //inline: true, // inlines CSS into HTML
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};