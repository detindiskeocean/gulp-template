var connect = require("gulp-connect");
var { watchHTML, htmlTask, scssTask, jsTask } = require("./tasks/html");
var { scssTask, watchScss } = require(".tasks/scss");
var { jsTask, watchJs } = require(".tasks/js");
var { imageTask, watchImage} = require(".tasks/images.js");
var { mediaTask, watchMedia } = require(".tasks/media.js");

function watch() {
	watchHTML();
	watchScss();
	watchJs();
	watchImage();
	watchMedia();
	
	connect.server({
		livereload: true,
		root: "dist",
		port: 3000
	});
}
  
function build(done) {
	scssTask();
	htmlTask();
	jsTask();
	imageTask();
	mediaTask();
	done();
}

exports.default = watch;
exports.build = build;