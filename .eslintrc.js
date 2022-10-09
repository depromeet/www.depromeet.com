module.exports = {
  extends: ['next', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['prettier', 'import', '@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',

    'no-var': 'error',
    'prefer-const': 'error',
    'no-implicit-coercion': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '_', varsIgnorePattern: '_' },
    ],

    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // react > next > @ > a~z
          ['^react$', '^next', '^@', '^[a-z]'],
          // ~
          ['^~'],
          // ./ > ../ > ../../
          ['^\\./?$', '^\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)', '^\\.\\./?$', '^\\.\\.(?!/?$)'],
          // Side effect imports
          ['^\\u0000'],
        ],
      },
    ],

    'import/default': 'off',
    'import/namespace': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
