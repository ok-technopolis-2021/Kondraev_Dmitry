import scss from 'rollup-plugin-scss'

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/output.js',
        format: 'esm'
    },
    plugins: [
        scss() // will output compiled styles to output.css
    ]
}