const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				loader: 'image-webpack-loader',
				enforce: 'pre',
				options: {
					mozjpeg: { progressive: true, quality: 65 },
					optipng: { enabled: false },
					pngquant: { quality: [0.65, 0.90], speed: 4 },
					gifsicle: { interlaced: false },
					webp: { quality: 75 },
				},
			},
		],
	},
	performance: {
		maxAssetSize: 200000, // 200 KB limit to avoid warnings
	},
};
