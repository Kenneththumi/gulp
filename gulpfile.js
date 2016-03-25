/**
 * Cytonn Technologies
 * @author Kenneth Thumi<kthumi.cytonn.com>
 *
 */
/* include the plugins to use */
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    sass=require('gulp-ruby-sass');
/* uglify the js using script task */
/* minifies the code */
gulp.task('script',function () {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});
/* converting sass files to generate css style */
gulp.task('style',function () {
	//gulp.src('sass/*.scss')
	return sass('sass/*.scss',{style:'compressed'})
	.pipe(gulp.dest('css/'));
});
/* Automatic converting sass files to generate css style */
gulp.task('watch',function () {
	gulp.watch('sass/*.scss',['style']);
});
/* running the various tasks */
gulp.task('default',['style','watch']);
