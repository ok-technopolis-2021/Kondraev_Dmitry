import scss from 'rollup-plugin-scss'
import html from '@rollup/plugin-html'
import fs from 'fs';

// hack!
const template = ({}) =>
    fs.readFileSync("src/index.html")

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/app.js',
        format: 'esm'
    },
    plugins: [
        scss(), // will output compiled styles to output.css
        html({
            template
        })
    ]
}
