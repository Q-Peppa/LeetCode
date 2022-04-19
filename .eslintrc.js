module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-var': 'off',
    camelcase: 'off',
    'no-irregular-whitespace': 'off',
    'no-extend-native': 'off'
  },
  extends: ['standard']
}
