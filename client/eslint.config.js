import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    files: ['**/*.{js,jsx}'],

    // Modern plugin loading (no legacy arrays)
    plugins: {
      react,
      reactHooks,
      reactRefresh,
    },

    extends: [
      js.configs.recommended,
      prettierConfig, // prevents ESLint from fighting Prettier
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      // React rules
      'react/jsx-uses-react': 'off', // not needed in React 17+
      'react/react-in-jsx-scope': 'off', // not needed in React 17+
      'react/jsx-uses-vars': 'error',

      // React Hooks rules (from eslint-plugin-react-hooks)
      'reactHooks/rules-of-hooks': 'error',
      'reactHooks/exhaustive-deps': 'warn',

      // React Refresh rules
      'reactRefresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Base JavaScript rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
