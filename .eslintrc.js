/* global module */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ['babel', 'react', 'prettier'],
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
  parser: 'babel-eslint',
  ignorePatterns: [
    'public/sw.js',
    'public/workbox-*.js',
    'public/sw.js.map',
    'public/workbox-*.js.map'
  ]
}
