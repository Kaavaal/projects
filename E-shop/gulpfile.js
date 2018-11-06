const gulp = require('gulp'); //Подключаем GULP
const autoprefixer = require('gulp-autoprefixer');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');


gulp.task('glue-components',function(){
	return gulp.src([
		'app/css/components/columns.css',
		'app/css/components/dropdown.css',
		'app/css/components/select.css',
		'app/css/components/sprite.css',
		'app/css/components/modal.css',
		'app/css/components/btn.css',
		])
	.pipe(concat('all-components.min.css')) //Склеиваем
	.pipe(cssnano()) //Сжали
	.pipe(gulp.dest('app/css'))
});


gulp.task('autoprefixer', function(){
	gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('sprite', function(){
    var spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        imgPath: '../img/sprite.png'
    }));
    var imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));
    var cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));
    return merge(imgStream, cssStream);
});

gulp.task('watch',['autoprefixer'], function(){
	gulp.watch('src/css/**/*.css',['autoprefixer']);
    gulp.watch('src/sprite/*.png',['sprite']);
});

gulp.task('default', ['watch']);