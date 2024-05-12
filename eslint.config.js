import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['src/**/*.js'],
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-constant-condition': 'off',
    },
  },
];
