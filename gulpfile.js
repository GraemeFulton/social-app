var gulp = require('gulp');

/**
 * Read in all the files under /gulp
 */
var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	
	require('./gulp/' + task)
})

/**
 * Tasks
 */

gulp.task('watch:js', ['js'], function(){
	
	gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('watch:css', ['css'], function(){
	
	gulp.watch('cssc/**/*.styl', ['css'])
})
/**
 * Gulp dev task
 */
 gulp.task('dev', ['watch:css', 'watch:js', 'dev:server', 'lint'])
 
 /**
  * Gulp Nodemon
  */
  


