module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    context: 'readonly',
    given: 'readonly',
  },
  ignorePatterns: [
    '.next/',
    'node_modules/',
    '.pnp.cjs',
    '.pnp.loader.mjs',
    'public',
    '.yarn',
    '@types',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  extends: [
    'next',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier', 'import', '@typescript-eslint', 'simple-import-sort', 'unused-imports'],
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

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
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

    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],

    'import/default': 'off',
    'import/namespace': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
