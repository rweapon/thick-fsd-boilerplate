import antfu from "@antfu/eslint-config";
import js from "@eslint/js";
import fsdPlugin from "eslint-plugin-fsd-lint";
import i18next from "eslint-plugin-i18next";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu(
  {
    type: "app",
    react: true,
    typescript: true,
    formatters: {
      html: false,
      css: false,
      markdown: false,
    },
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["./git", "./vscode", "dist", "node_modules", "README.md", "eslint-plugin-fsd-lint"],
  },
  [js.configs.recommended, i18next.configs["flat/recommended"], ...tailwind.configs["flat/recommended"]],
  {
    name: "fsdPlugin",
    plugins: {
      fsd: fsdPlugin,
    },
    files: ["**/*.{ts,tsx}"],
    rules: {
      "fsd/forbidden-imports": ["warn", { alias: {
        value: "@",
        withSlash: false,
      }, folderPattern: {
        enabled: true,
        regex: "^(\\d+_)?(.*)",
        extractionGroup: 2,
      } }],
      "fsd/no-relative-imports": "error",
      "fsd/no-public-api-sidestep": ["error", { layers: ["@app", "@pages", "@widgets", "@features", "@entities", "@shared"] }],
      "fsd/no-cross-slice-dependency": "off",
      "fsd/no-ui-in-business-logic": "off",
      "fsd/no-global-store-imports": "off",
      "fsd/ordered-imports": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-unused-vars": "off",
      "ts/no-unused-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "style/object-curly-newline": [1, {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
        ImportDeclaration: "never",
        ExportDeclaration: { multiline: true, minProperties: 3 },
      }],
      "style/jsx-closing-bracket-location": [1, "line-aligned"],
      "style/jsx-first-prop-new-line": [1, "multiprop"],
      "style/key-spacing": "error",
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          cases: { pascalCase: true, camelCase: true },
          ignore: ["README.md", "vite-env.d.ts"],
        },
      ],
      "i18next/no-literal-string": "off",
    },
  },
  {
    name: "tailwind",
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl"],
        config: "tailwind.config.js",
        cssFiles: [
          "**/*.css",
          "!**/node_modules",
          "!**/.*",
          "!**/dist",
          "!**/build",
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  },
);
