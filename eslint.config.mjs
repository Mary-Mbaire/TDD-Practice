import babelParser from "@babel/eslint-parser";

export default [
    {
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                requireConfigFile: false,
            },
        },

        rules: {
            "no-unused-vars": [
                "error",
                {
                    vars: "all",
                    args: "after-used",
                    caughtErrors: "all",
                    ignoreRestSiblings: false,
                    reportUsedIgnorePattern: false,
                },
            ],
        },
    },
];