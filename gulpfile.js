const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('src/**/*')
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
        .pipe(gulp.dest('dist/'))
);