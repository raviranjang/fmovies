module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  parserOptions: { project: ['tsconfig.json'] },
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  root: true,
  rules: {
    'import/prefer-default-export': 0,
    'import/named': 0,
    'class-methods-use-this': 0,
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyles: 'never' }],
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
  },
}
