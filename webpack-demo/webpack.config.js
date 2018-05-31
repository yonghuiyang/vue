const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist')
    },
    devServer: {
	contentBase: './dist'
    },
    module: {
	rules: [
	    {
		test: /\.css$/,
		use: [
		    'style-loader',
		    'css-loader'
		]
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		    'file-loader'
		]
	    }
	]
    }
};
