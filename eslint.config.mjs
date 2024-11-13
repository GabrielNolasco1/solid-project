// eslint.config.mjs
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Adiciona configurações recomendadas do ESLint Prettier
  eslintPluginPrettierRecommended,

  // Configuração geral para arquivos .js, .mjs, .cjs e .ts
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },

  // Configuração específica para arquivos .js
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  // Configuração para o ambiente de navegador
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Regras personalizadas
  {
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true }, // Opção para ignorar parâmetros de função
      ],
    },
    ignores: ['.node_modules/*'],
  },

  // Configurações recomendadas do ESLint para JavaScript
  pluginJs.configs.recommended,

  // Configurações recomendadas do TypeScript ESLint
  ...tseslint.configs.recommended,
];
