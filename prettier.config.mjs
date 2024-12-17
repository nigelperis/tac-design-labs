import vercelPrettierConfig from '@vercel/style-guide/prettier';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...vercelPrettierConfig,
  semi: true,
  tailwindAttributes: ['cn'],
  tailwindFunctions: ['cn'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/components/ui/(.*)$',
    '',
    '^~/components/(.*)$',
    '',
    '^~/utils/(.*)$',
    '',
    '^~/assets/svgs/(.*)$',
    '',
    '^~/assets/(.*)$',
    '',
    '^[./]',
    '<TYPES>',
  ],
};

export default config;
