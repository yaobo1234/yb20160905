var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
	plugins : [
		new ExtractTextPlugin("bundle.css"),
		new htmlWebpackPlugin({
			template : "./demo01.html"
		})
	],
	entry : {
		index : "./main.js"
	},
	output : {
		path : "dist",
		filename : "all.js"
	},
	module : {
		/*loaders : [
			{
				//test :/\.(css)/,
				test : /\.(css|less)/,
				loader : "style!css"
			}
		]*/

		loaders : [
			{
				//test :/\.(css)/,
				test : /\.(css|less)/,
				loader : ExtractTextPlugin.extract(["css","less"])
			},
			{
				test : /\.(jpg|gif|png)/,
				loader : "file?name=imgs/[name].[ext]"
			},
			{
				test : /\.(ttf|wof)/,
				loader : "file?name=fonts/[naem].[ext]"
			}
		]
	}
}
















