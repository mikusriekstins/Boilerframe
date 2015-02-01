var gulp = require('gulp');
var coffee = require('gulp-coffee');
//var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

function showError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('default', ['scripts', 'sass', 'watch']);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('assets/coffee/*.coffee', ['coffee']);
});

gulp.task('sass', function() {
  gulp.src('assets/sass/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .on('error', showError)
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  gulp.src('assets/coffee/*.coffee')
    .pipe(coffee({ bare: true }))
    .on('error', showError)
    //.pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(livereload());
});
