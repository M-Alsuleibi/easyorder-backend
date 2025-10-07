<<<<<<< HEAD
import { defineConfig } from "eslint/config";
=======
>>>>>>> FC-27
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

<<<<<<< HEAD
export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "**config.ts"],
  },
  {
    files: ["**/*.ts"],

=======
export default [
  {
    ignores: ["dist/**", "node_modules/**", "**/*.config.ts", "**/*.d.ts"],
  },
  {
    files: ["**/*.ts"],
>>>>>>> FC-27
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
<<<<<<< HEAD

    plugins: {
      "@typescript-eslint": tsPlugin as any,
      import: importPlugin,
    },

    rules: {
      "prefer-const": "error",
      semi: "error",
      "no-console": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": ["warn"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-misused-promises": "error",
=======
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
    },
    rules: {
      "prefer-const": "warn",
      "no-var": "error",
      curly: "warn",
      eqeqeq: "warn",
      //"no-console": "warn",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      //   "@typescript-eslint/consistent-type-imports": [
      //     "warn",
      //     { prefer: "type-imports" },
      //   ],

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      //"@typescript-eslint/strict-boolean-expressions": "warn",
>>>>>>> FC-27

      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
<<<<<<< HEAD
          "newlines-between": "always",
        },
      ],
    },
  },
]);
=======
        },
      ],
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
    },
  },
];
>>>>>>> FC-27
