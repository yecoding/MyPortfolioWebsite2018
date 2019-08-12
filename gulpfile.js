const gulp = require('gulp');
const sass = require('gulp-sass')
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

/* 
	--Top Level Functions --
	gulp.task - Define Tasks
	gulp.src - Point tofiles to use
	gulp.dest - Points to folder to output
	gulp.watch -  Watch files and folders for change
*/


//Copy All HTML files
gulp.task('copyHTML', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});

//Minify JS
// gulp.task('minifyJS', function(){
// 	gulp.src('src/js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/js'))
// })

//Copy JS
gulp.task('copyJS', function(){
	gulp.src('src/js/main.js')
	.pipe(gulp.dest('dist/js'));
})

//Compile Sass
gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
})


//Minify CSS

gulp.task('minifyCSS', function(){
  return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


// Watch files in src folder
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['copyJS']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHTML']); 
});

gulp.task('default', ['copyHTML', 'copyJS', 'sass']);

