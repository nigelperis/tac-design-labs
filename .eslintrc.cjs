const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/** @type { import("eslint").Linter.Config } */
module.exports = {
  extends: [
    'next/core-web-vitals',
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'prettier',
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'import/no-default-export': 'off',
    'import/order': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
