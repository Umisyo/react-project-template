module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'declaration-block-trailing-semicolon': 'always',
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: [
          '> 5% in JP',
          'Last 2 Safari versions',
          'Last 2 iOS versions',
          'Last 2 Chrome versions',
          'Last 2 ChromeAndroid versions',
          'IE 11',
          'Last 2 Edge versions',
          'Last 2 Firefox versions',
          'Last 2 FirefoxAndroid versions',
        ],
        severity: ['warning'],
      },
    ],
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
