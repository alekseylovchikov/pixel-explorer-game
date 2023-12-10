const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylexPlugin = require('@stylexjs/webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = (env, argv) => ({
	entry: './src/game.ts',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		hot: true,
	},
	mode: isProduction ? 'production' : 'development',
	output: {
		filename: isProduction ? '[name].[contenthash].js' : '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
		},
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new StylexPlugin({
			filename: 'styles.css',
			// get webpack mode and set value for dev
			dev: argv.mode === 'development',
			// Use statically generated CSS files and not runtime injected CSS.
			// Even in development.
			runtimeInjection: false,
			// optional. default: 'x'
			classNamePrefix: 'x',
			// Required for CSS variable support
			unstable_moduleResolution: {
				// type: 'commonJS' | 'haste'
				// default: 'commonJS'
				type: 'commonJS',
				// The absolute path to the root directory of your project
				rootDir: __dirname,
			},
		}),
	],
});

module.exports = config;
