module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  extends: ['eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb', 'airbnb/hooks',
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/prefer-stateless-function': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 'off',
    'no-nested-ternary': ['off'],
    'max-len': ['error', { code: 200 }],
    // indent: ['error', 4],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-this-before-super': ['off'],
    'no-useless-constructor': ['off'],
    'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': ['off'],
    'no-new': ['off'],
    'prefer-template': ['error'],
    'no-plusplus': ['off'],
    // typescript rules
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
        overrides: {
          accessors: 'no-public',
          methods: 'no-public',
          properties: 'no-public',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': [
      'error',
      { allows: ['protected', 'public'] },
    ],
    '@typescript-eslint/camelcase': ['off'], // use eslint camelcase rule
    '@typescript-eslint/no-empty-function': ['off'], // use eslint no-empty-function rule
    '@typescript-eslint/no-use-before-define': ['off'], // use eslint no-use-before-define rule
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
};
