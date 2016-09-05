/*模块化开发
*语法规范 -----------cmd规范
*相对的另一个--------amd规范
*/
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(11111)

});

//合并css代码
var concat = require("gulp-concat");

gulp.task("concat",function(){
	//要加载连接哪些文件
	gulp.src("js/*.js")
	//连接文件
	.pipe(concat("all.js"))
	//destination  返回一个build/js/all.js
	.pipe(gulp.dest("build/js/"));
});



/*var  con = require("gulp-concat");
gulp.task("con",function(){
	return gulp.src("js/*.js")
	.pipe(concat("all.js"))
	.pipe(gulp.dest("buids/js"));
})*/

//压缩js代码
var ugly = require("gulp-uglify");
gulp.task("uglyjs",function(){
	return gulp.src("build/js/all.js")
	.pipe(ugly())
	.pipe(gulp.dest("buildr/js"));
})

//watch监控文件  合并，压缩等
gulp.task("aaa",function(){
	gulp.watch("js/*.js",["concat","uglyjs"])
})

//自动补全css前缀
var ap = require("gulp-autoprefixer");
gulp.task("prefixer",function(){
	gulp.src("css/*.css")   //开始文件路径
	.pipe(ap())
	.pipe(gulp.dest("build/css/"))  //自动补全放的路径
})

var server = require("gulp-webserver");

gulp.task("server",function(){
	gulp.src("./")
	.pipe(server({
		host:"localhost",
		port:8080,
		livereload: true, //时时加载
		directoryListing: true,   //true,false
		open:true
	}))
})


var less = require("gulp-less");
gulp.task("less",function(){
	gulp.src("less/*.less")
	.pipe(less())
	.pipe(gulp.dest("build/css/"));
})



gulp.task("aaa",function(){
	gulp.watch("less/*.less",["less"]);
})



































