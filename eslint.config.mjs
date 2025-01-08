import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', '*.min.js'],
  },
  {
    files: ['*.js', '*.mjs'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      js: pluginJs,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,

      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          printWidth: 80,
        },
      ],
    },
  },
];
