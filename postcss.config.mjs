const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@fullhuman/postcss-purgecss').UserDefinedOptions} */
const purgeCssOptions = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-bootstrap/**/*.js',
    './node_modules/yet-another-react-lightbox/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: {
    standard: [ 'html', 'body', /^PhoneInput/u ],
    deep: [ /modal-/u, /show/u, /fade/u, /nav/u, /^yarl__/u ],
    greedy: [ /^Toastify/u, /^react-multi-carousel/u, /^react-multiple-carousel/u, /^yarl__/u ],
  },
  defaultExtractor: content => content.match(/[\w\-/:]+(?<!:)/gu) ?? [],
};

/** @type {import('postcss-preset-env').pluginOptions} */
const postCSSPresetEnvOptions = {
  autoprefixer: { flexbox: 'no-2009' },
  stage: 3,
  features: { 'custom-properties': false },
};

/** @type {import('postcss-load-config').Config} */
const postCSSConfig = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': postCSSPresetEnvOptions,
    ...(isProd ? { '@fullhuman/postcss-purgecss': purgeCssOptions } : {}),
  },
};

export default postCSSConfig;
