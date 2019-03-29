import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
      file: 'dist/js/bundle.js',
      format: 'umd'
    },
    plugins: [
        typescript()
    ]
  };