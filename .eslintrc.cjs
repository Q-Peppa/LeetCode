module.exports = {
  plugins: ['prettier'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-constant-condition': 'off',
  },
};
