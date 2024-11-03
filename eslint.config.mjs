import globals from 'globals';
import pluginJs from '@eslint/js';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  js.configs.recommended,

  {
    rules: {
      indent: 'error',
    },
  },
  eslintConfigPrettier,
];
