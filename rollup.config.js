import typescript from 'rollup-plugin-typescript';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default {
    entry: './src/index.ts',
    dest: './dist/index.js',

    format: 'umd',

    plugins: [
        typescript() ,
        globals(),
        builtins()
    ]
};