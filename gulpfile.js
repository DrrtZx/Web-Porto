// gulpfile.js
const { src, dest, series, parallel, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Minify & combine CSS
function cssTask() {
  return src('src/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}

// Minify & combine JS
function jsTask() {
  return src('src/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

// Watch for changes
function watchTask() {
  watch('src/css/*.css', cssTask);
  watch('src/js/*.js', jsTask);
}

// Default task
exports.default = series(
  parallel(cssTask, jsTask),
  watchTask
);
