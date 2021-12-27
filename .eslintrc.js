module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    complexity: [2, { max: 10 }],
    'linebreak-style': 0,
    'react/function-component-definition': [
      0,
      { namedComponents: 'function-declaration' },
    ],
  },
  settings: {
    'import/core-modules': ['prop-types', '@material-ui/utils'],
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: { version: 'detect' },
  },
};
