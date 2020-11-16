const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('src/2020/08/*')
        .pipe(imagemin({
        	verbose: true,
		    interlaced: true,
		    progressive: true,
		    optimizationLevel: 5,
		    svgoPlugins: [
		        {
		            removeViewBox: true
		        }
		    ]
		}))
        .pipe(gulp.dest('dist/2020/08/'))
);