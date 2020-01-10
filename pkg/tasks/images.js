var gulp = require("gulp");
var connect = require("gulp-connect");
var imagemin = require("gulp-imagemin");
var recompress = require("imagemin-jpeg-recompress");

function imageTask() {
	return gulp.src("src/mages/*")
	.pipe(imagemin([
		imagemin.jpegtran({ progressive: true }),
		recompress({
			min: 40,
			max: 90,
			target: 0.5
		})
	]))
	.pipe(gulp.dest("dist(assets/images"))
	.pipe(connect.reload());
}

function watchImage() {
	return gulp.watch("src/images/*", { ignoreInitial: false }, imageTask);
}

module.exports = {
	imageTask,
	watchImage
}
