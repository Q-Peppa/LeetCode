const eslintConfigPrettier = require("eslint-config-prettier")
const js = require("@eslint/js")
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType:"module",
    }
  },
  {
    files: ["src/**/*.js"],
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-constant-condition': 'off',
    }
  }
]
