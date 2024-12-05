import vercelPrettierConfig from "@vercel/style-guide/prettier";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...vercelPrettierConfig,
  semi: true,
};

export default config;
