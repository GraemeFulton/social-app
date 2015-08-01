var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', function(){
	
	//make sure module.js is loaded first
	gulp.src(['ng/module.js','ng/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'))
	
})