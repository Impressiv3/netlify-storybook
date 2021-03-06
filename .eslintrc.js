module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'arrow-parens': 'off',
    quotes: 'off',
    'no-unexpected-multiline': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/camelcase': 'off',
    'func-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-restricted-globals': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'react/no-access-state-in-setstate': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js', '**/*.test.js'],
      },
    ],
  },
};
