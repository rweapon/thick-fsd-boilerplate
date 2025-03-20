import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import i18next from "eslint-plugin-i18next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  { ignores: ["./git", "./vscode", "dist", "node_modules", "README.md"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      i18next.configs["flat/recommended"],
      eslintPluginPrettierRecommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      "no-alert": "error",
      "prefer-const": "warn",
      indent: ["warn", 2],
      "linebreak-style": "off",
      "arrow-parens": "off",
      "object-curly-newline": "off",
      "no-mixed-operators": "off",
      "function-paren-newline": "off",
      "no-plusplus": "off",
      "space-before-function-paren": 0,
      // "max-len": [
      //   "error",
      //   120,
      //   2,
      //   {
      //     ignoreUrls: true,
      //   },
      // ],
      "i18next/no-literal-string": "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
        },
      ],
      "jsx-a11y/label-has-for": [
        2,
        {
          required: {
            every: ["id"],
          },
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
        },
      ],
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
    },
  }
);
