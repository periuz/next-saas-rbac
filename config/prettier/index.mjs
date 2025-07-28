//** @typedef {import('prettier').Config} PrettierConfig */

import { jsx } from "react/jsx-runtime";


/** @type {PrettierConfig} */
const config = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: 'auto',
    bracketSameLine: false,
    plugins: [
        "prettier-plugin-tailwindcss"
    ]
}
export default config;