var gulp = require("gulp");
var connect = require("gulp-connect");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");

function jsTask() {
	return gulp.src("src/js/*.js")
	.pipe(sorcemaps.init())
	.pipe(babel({presets: ["@babel/env"] }))
	.pipe(uglify())
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest(dist/js))
	.pipe(connect.reload())
	// .pipe(concat("all.js"))
	// .pipe(terser())
	
}

function watchJs() {
	return gulp.watch("src/js/**/*.js", { ignoreInitial: false }, htmlTask)
}

module.exports = {
	jsTask,
	watchJs
}