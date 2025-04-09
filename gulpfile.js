const { src, dest, series } = require('gulp');
const convert = require('gulp-convert');
const ext_replace = require('gulp-ext-replace');

// Define the build task
function build() {
  return src(['syntaxes/*.YAML-tmLanguage'])
    .pipe(convert({
      from: 'yml',
      to: 'plist'
    }))
    .pipe(ext_replace('.tmLanguage'))
    .pipe(dest('syntaxes/'));
}

// Export tasks
exports.build = build;

// Default task (if you want to run 'gulp' without specifying 'build')
exports.default = series(build);