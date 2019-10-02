module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content',
          'else',
          'error',
        ],
      },
    ],
    'order/properties-alphabetical-order': true,
  },
}

