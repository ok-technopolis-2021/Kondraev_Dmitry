const {src, dest, watch, parallel, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const inject = require('gulp-inject');
const image = require('gulp-image');
const {rollup} = require('rollup');
const path = require('path');
const del = require('del');