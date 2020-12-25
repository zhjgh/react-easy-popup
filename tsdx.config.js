/*
 * Description: 
 * Author: zhanghj
 * Date: 2020-12-23 10:29:14
 * LastEditors: zhanghj
 * LastEditTime: 2020-12-23 10:29:33
*/

const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        extract: 'react-easy-popup.min.css',
      })
    );
    return config;
  },
};
