var gulp = require('gulp');
var mocha = require('gulp-mocha');

// Internal Tests
gulp.task('test', function() {
    return gulp.src('./tests/test.js', {read: false})
      .pipe(mocha({ reporter: 'spec' }));
});
