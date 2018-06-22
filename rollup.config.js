import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/bundle.min.js',
      format: 'cjs'
    },
    {
      file: './dist/bundle.esm.js',
      format: 'es'
    },
    {
      file: './dist/bundle.umd.js',
      format: 'umd',
      name: 'bundle'
    }
  ],
  plugins: [
    vue(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ]
}
