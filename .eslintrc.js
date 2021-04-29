module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		"prettier"
	],
	globals: {
		foo: true,
		document: true,
		window: true
	},
	rules: {
		"object-curly-spacing": 0,
		"indent": 0,
		"comma-dangle": 0,
		"arrow-parens": 0,
		"no-undef": 1,
		"no-debugger": 0,
		"prefer-const": 1,
		"no-unused-vars": 1,
		"no-empty-function": 0,
		"no-restricted-syntax": 0,
		"no-use-before-define": 0,
		"no-underscore-dangle": 0,
		"no-param-reassign": [2, { "props": false }],
		"linebreak-style": [0, 1, "windows"],
		"react/prop-types": 1,
		"react/no-children-prop": 0,
		"react/no-array-index-key": 0,
		"react/forbid-prop-types": 0,
		"react/require-default-props": 0,
		"react/destructuring-assignment": 0,
		"react/prefer-stateless-function": 0,
		"react/jsx-indent": 0,
		"react/jsx-indent-props": 0,
		"react/jsx-wrap-multilines": 0,
		"react/jsx-props-no-spreading": 0,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-closing-tag-location": 0,
		"react/jsx-one-expression-per-line": 0,
		"react/jsx-closing-bracket-location": 0,
		"import/prefer-default-export": 0,
		"jsx-a11y/anchor-is-valid": 0,
		"jsx-a11y/label-has-associated-control": 0
	}
};
