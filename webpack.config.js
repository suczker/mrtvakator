var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry : {
	    bundle : './src/app.js',
	    vendor : ['jquery', 'babel-polyfill'],
    },
    output : {
        path : './dist',
        filename : 'bundle.js',
    },
    plugins : [
        new HtmlWebpackPlugin( {title : 'Mrtvakator' , name : 'index.html'} ),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ 'vendor', /* chunkFile = */ 'vendor.js'),
        new ExtractTextPlugin('styles.css'),
    ],
    module : {
        loaders : [
            {
                test : /\.css$/ , // loader : 'style-loader!css-loader' ,
                loader: ExtractTextPlugin.extract('style', 'css'),
            },
            {
                test : /\.js$/ , 
                exclude : /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                
                // loader :  'babel-loader', query : { presets : ['es2015'] }, 
            },
            // loaders for the fonts and other files from bootstrap. Seems like you really need to have them
            // because otherwise it will not get you going.
            {test : /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=res/[hash].[ext]" },
            {test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=res/[hash].[ext]" },
            {test : /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=res/[hash].[ext]" },
            {test : /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&bane=res/[hash].[ext]" },
            {test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file?name=res/[hash].[ext]'}, // -loader
        ],
    }
}
