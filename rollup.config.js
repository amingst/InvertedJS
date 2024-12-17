const path = require('path');
const typescript = require('rollup-plugin-typescript2')
const terser = require('@rollup/plugin-terser')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.min.js', // Minified output for production
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()], // Minify using Terser
    },
  ],
  external: ['react', 'react-dom', 'axios', 'react/jsx-runtime'],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  preserveModules: false,
};
