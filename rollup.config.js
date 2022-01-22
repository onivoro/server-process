// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
        },

        {
            dir: 'dist/mjs',
            format: 'es',
        },

    ],
    plugins: [typescript()],
};