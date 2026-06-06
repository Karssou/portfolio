// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    quotes: ["warn", "double", { avoidEscape: true }],
    "jsx-quotes": ["warn", "prefer-double"],
    /*
     * 🧼 JS / TS
     */
    "no-console": "off", // utile en dev
    "no-debugger": "warn",

    /*
     * 🧠 TypeScript
     */
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    /*
     * 🟢 Vue
     */
    "vue/multi-word-component-names": "off", // sinon relou pour pages
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",

    /*
     * 🎯 Formatting (léger, sans conflit Prettier)
     */

    indent: ["warn", 2],

    /*
     * 🚀 Nuxt
     */
    "nuxt/no-cjs-in-config": "off",
  },
});
