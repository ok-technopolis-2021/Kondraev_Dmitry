const {src, dest, watch, parallel, series} = require('gulp');
const tildeImporter = require('node-sass-tilde-importer');
const sass = require('gulp-sass')(require('sass'));
const inject = require('gulp-inject');
const image = require('gulp-image');
const {rollup} = require('rollup');
const path = require('path');
const del = require('del');

const dist = './dist';
const paths = {
    build: {
        scss: {
            source: './src/styles/main.scss',
            destination: dist,
        },
        html: {
            source: './src/index.html',
            destination: dist,
            injectSources: `${dist}/**/*.{css,js}`,
        },
        js: {
            source: './src/app.js',
            destination: dist,
        },
    },
    watch: {
        scssSource: './src/**/*.scss',
        jsSource: './src/**/*.js',
        htmlSource: './src/index.html',
    },
    assets: {
        optimizable: {
            source: './assets/*.{png,gif,svg}',
            destination: `${dist}/assets`,
        },
        optimized: {
            source: './assets/icons/*.png',
            destination: `${dist}/assets/icons`,
        },
        media: {
            source: './media/*.pdf',
            destination: `${dist}/media`,
        },
        fontawesome: {
            source: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.*',
            destination: `${dist}/assets/webfonts`,
        },
    },
    clean: {
        source: `${dist}/*`,
    },
}

Object.assign(exports, {
    'build:scss': () => buildScss(),
    'build:js': () => buildJs(),
    'build:html': () => buildHtml(),
    'watch:scss': () => watch(paths.watch.scssSource, exports['build:scss']),
    'watch:js': () => watch(paths.watch.jsSource, exports['build:js']),
    'watch:html': () => watch(paths.watch.htmlSource, exports['build:html']),
    'assets:optimizable': () => assetsOptimizable(),
    'assets:optimized': () => simpleCopy(paths.assets.optimized),
    'assets:media': () => simpleCopy(paths.assets.media),
    'assets:fontawesome': () => simpleCopy(paths.assets.fontawesome),
    clean: () => del(paths.clean.source),
});
exports.build = series(parallel(exports['build:scss'], exports['build:js']), exports['build:html']);
exports.watch = parallel(exports['watch:scss'], exports['watch:js'], exports['watch:html']);
exports.assets = parallel(exports['assets:optimizable'], exports['assets:optimized'], exports['assets:media'], exports['assets:fontawesome']);
exports.default = series(exports.build, exports.watch);
exports['build:all'] = parallel(exports.build, exports.assets);

function buildScss() {
    const {source, destination} = paths.build.scss;
    return src(source)
        .pipe(sass({importer: tildeImporter}).on('error', sass.logError))
        .pipe(dest(destination));
}

function buildHtml() {
    const {source, destination, injectSources} = paths.build.html;
    const sources = src(injectSources, {read: false});
    return src(source)
        .pipe(inject(sources, {
            relative: true,
            ignorePath: '../' + path.basename(destination),
            addPrefix: '.',
        }))
        .pipe(dest(destination));
}

async function buildJs() {
    const {source, destination} = paths.build.js;
    const bundle = await rollup({
        input: source,
    });
    await bundle.write({
        dir: destination,
        format: 'es',
    });
    await bundle.close();
}

function assetsOptimizable() {
    return src(paths.assets.optimizable.source)
        .pipe(image({
            pngquant: true,
            optipng: true,
            zopflipng: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
        }))
        .pipe(dest(paths.assets.optimizable.destination));
}

function simpleCopy({source, destination}) {
    return src(source)
        .pipe(dest(destination));
}
