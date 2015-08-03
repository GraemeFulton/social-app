var gulp = require('gulp')
var jshint = require('gulp-jshint')
var csslint = require('gulp-csslint');

gulp.task("lint:js", function() {
    gulp.src("ng/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('lint:css', function(){
    gulp.src('css/*.*')
    .pipe(csslint())
    .pipe(csslint.reporter());
})

gulp.task('lint', ['lint:css', 'lint:js']);