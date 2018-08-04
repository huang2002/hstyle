import babel from "rollup-plugin-babel";

const input = 'raw/index.js';

export default [
    {
        input,
        output: {
            format: 'es',
            file: 'dist/hstyle.js'
        }
    },
    {
        input,
        plugins: [
            babel()
        ],
        output: {
            format: 'umd',
            name: 'HStyle',
            file: 'dist/hstyle.umd.js'
        }
    }
];
