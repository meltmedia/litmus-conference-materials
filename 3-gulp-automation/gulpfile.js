var gulp         = require('gulp');
var htmlhint     = require('gulp-htmlhint');
var htmlmin      = require('gulp-htmlmin');
var emailBuilder = require('gulp-email-builder');
var rename       = require('gulp-rename');

function buildEmail(path){
  return gulp.src([path])
    .pipe(htmlhint({
      'tag-pair': true,
      'spec-char-escape': true,
      'doctype-first': false
    }))
    .pipe(htmlhint.reporter())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(emailBuilder({encodeSpecialChars: true}).build())
    .pipe(rename('email.html'))
    .pipe(gulp.dest('./dest/'));
}

gulp.task('watchEmail', function () {
  gulp.watch('**/template.html').on('change', function (evt) {
    return buildEmail(evt.path);
  });
});

gulp.task('build', function(){
  return buildEmail('./src/template.html');
});

gulp.task('default', ['watchEmail']);