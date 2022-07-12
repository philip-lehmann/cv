/* global module */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended'
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'react/prop-types': 'off'
  },
  ignorePatterns: ['public/sw.js', 'public/workbox-*.js', 'public/sw.js.map', 'public/workbox-*.js.map']
}
