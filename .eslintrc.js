module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'env': {
    'node': true,
    'browser': true,
    'es6': true,
    'jquery': true
  },
  'globals': {
    // 'angular': true
  },
  'ecmaFeatures': {
    'forOf': true,
    'jsx': true
  },
  'rules': {
    'no-unused-vars': [ 0, {
      'vars': 'local'
    } ],
    'no-console': 0,
    'quotes': [
      2,
      'single'
    ],
    'indent': [
      2,
      2
    ],
    'semi': [
      2,
      'always'
    ]
  }
};
