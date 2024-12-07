import vercelPrettierConfig from '@vercel/style-guide/prettier';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...vercelPrettierConfig,
  semi: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/ui/(.*)$',
    '',
    '^[./]',
    '<TYPES>',
  ],
};

export default config;
