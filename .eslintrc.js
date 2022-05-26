module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended', 'prettier'],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		// '@typescript-eslint/ban-ts-ignore': 'off',
		// '@typescript-eslint/no-unused-vars': 'off',
		// '@typescript-eslint/explicit-function-return-type': 'off',
		// '@typescript-eslint/no-explicit-any': 'off',
		// '@typescript-eslint/no-var-requires': 'off',
		// '@typescript-eslint/no-empty-function': 'off',
		// '@typescript-eslint/no-use-before-define': 'off',
		// '@typescript-eslint/ban-ts-comment': 'off',
		// '@typescript-eslint/ban-types': 'off',
		// '@typescript-eslint/no-non-null-assertion': 'off',
		// '@typescript-eslint/explicit-module-boundary-types': 'off',
		// to enforce using type for object type definitions, can be type or interface
		// '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 9999,
				tabWidth: 2,
				singleQuote: true,
				semi: false,
				trailingComma: 'all',
				jsxBracketSameLine: false,
				bracketSpacing: true,
				endOfLine: 'auto',
			},
		],
		// 'arrow-body-style': 'off',
		// 'prefer-arrow-callback': 'off',
	},
}
