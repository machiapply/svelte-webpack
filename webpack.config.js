const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

// using default .env, overwrite on server settings (eg heroku)
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const envext = prod ? '' : `.${mode}`;
dotenv.config({ path: `./.env${envext}` });

// regex could be more specific to the project name
const filterRgx = /^SITE_/i;
const envVars = Object.keys(process.env)
  .filter(key => filterRgx.test(key))
  .reduce(
    (env, key) => { env[key] = process.env[key]; return env; },
    { NODE_ENV: mode, }
  );

module.exports = {
	entry: {
		bundle: ['./src/index.js'],
		// global: ['./src/styles/styles.scss']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.html', '.json']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'svelte-loader',
						options: {
							skipIntroByDefault: true,
							nestedTransitions: true,
							emitCss: true,
							hotReload: true
						}
					}
				]
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			},
			{
				test: /\.(svg|eot|ttf|woff|woff2)?$/,
				exclude: /src/,
				loader: 'file-loader',
				options: {
						name: '[name].[ext]'
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /src/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
				options: {
					// removeSVGTagAttrs: true
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					{
						loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
							],
							// sourceMap: prod
						}
					},
					{
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
							sourceMap: !prod,
							data: `$fontPath: '/assets/fonts';`,
            }
          }
				]
			},
		]
	},
	mode,
	// nothing for heroku, but important for webpack dev server
  devServer: {
    historyApiFallback: true,
  },
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].[id].css'
		}),
		new webpack.DefinePlugin({
			'process.env': Object.keys(envVars).reduce(
        (env, key) => { env[key] = JSON.stringify(envVars[key]); return env; },{}
      ),
		})
	],
	devtool: prod ? false: 'source-map',

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		fs: 'empty'
	},
};
