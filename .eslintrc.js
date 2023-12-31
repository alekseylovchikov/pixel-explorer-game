const options = {};

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['@stylexjs'],
	extends: 'airbnb-base',
	settings: {
		'import/resolver': {
			webpack: {
				config: './webpack.config.js',
			},
		},
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'@stylexjs/valid-styles': ['error', { ...options }],
	},
};
