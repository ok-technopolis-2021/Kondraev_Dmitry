import scss from 'rollup-plugin-scss'
import html from '@rollup/plugin-html'
import fs from 'fs';

// hack!
const template = ({ attributes, bundle, files, publicPath, title }) => 
    fs.readFileSync("./index.html")

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/output.js',
        format: 'esm'
    },
    plugins: [
        scss(), // will output compiled styles to output.css
        html({
            template
        })
    ]
}