const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('pattern', () =>
  gulp
    // .src('lib/pattern/index.js')
    .src('lib/pattern/eventProxy.js')
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(gulp.dest('dist/pattern'))
);
