module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es2022: true,
    node: true,
    browser: true,
    mocha: true,
  },
  plugins: ["vue"],
  extends: ["plugin:vue/vue3-essential"],
  ignorePatterns: [
    "node_modules/",
    "coverage/",
    ".nyc_output/",
    "dist/",
    "reports/",
    "tool-fixtures/",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    eqeqeq: ["warn", "smart"],
    "no-var": "warn",
    "prefer-const": "warn",
    "no-console": "off",
  },
  overrides: [
    {
      files: ["src/domain/**/*.js", "test/**/*.js"],
      parserOptions: { sourceType: "script" },
    },
  ],
};
