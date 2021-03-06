import buble from 'rollup-plugin-buble';
import istanbul from 'rollup-plugin-istanbul';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const isProduction = process.env.BUILD === 'production';
const isDev = process.env.BUILD === 'dev';
const banner = isProduction
  ? '/**\n' +
    '* @file Aramaic CAL code transliteration utilities\n' +
    '* @version 1.1.7\n' +
    '* @author Greg Borota\n' +
    '* @copyright (c) 2017 Greg Borota.\n' +
    '* @license MIT\n' +
    '*\n' +
    '* Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
    '* of this software and associated documentation files (the "Software"), to deal\n' +
    '* in the Software without restriction, including without limitation the rights\n' +
    '* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
    '* copies of the Software, and to permit persons to whom the Software is\n' +
    '* furnished to do so, subject to the following conditions:\n' +
    '*\n' +
    '* The above copyright notice and this permission notice shall be included in\n' +
    '* all copies or substantial portions of the Software.\n' +
    '*\n' +
    '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
    '* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
    '* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
    '* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
    '* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM\n' +
    '* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n' +
    '* SOFTWARE.\n' +
    '*/\n\n' +
    '// https://peshitta.github.io\n' +
    '// https://sedra.bethmardutho.org/about/fonts\n' +
    '// http://cal1.cn.huc.edu/searching/fullbrowser.html\n'
  : '';

const external = Object.keys(pkg.dependencies);
const input = 'src/main.js';
const name = 'calCodeUtil';
const format = 'umd';
const globals = { 'aramaic-mapper': 'aramaicMapper' };
const sourcemap = !isProduction;
const plugins = [buble()];

// browser/nodejs-friendly UMD build
const targets = [
  {
    input,
    output: [{ file: pkg.main, format, name, globals, sourcemap, banner }],
    external,
    plugins: plugins.slice(0)
  }
];

if (isProduction) {
  // ES module (for bundlers) build.
  targets.push({
    input,
    output: [{ file: pkg.module, format: 'es', banner }],
    external,
    plugins: plugins.slice(0)
  });

  plugins.push(
    uglify({
      output: {
        comments: (node, comment) => {
          const { value, type } = comment;
          return type === 'comment2' && /@license/i.test(value);
        }
      }
    })
  );

  // browser/nodejs-friendly minified UMD build
  targets.push({
    input,
    output: [{ file: pkg.mainMin, format, name, globals, banner }],
    external,
    plugins
  });
} else if (!isDev) {
  targets[0].plugins.push(
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })
  );
}

export default targets;
