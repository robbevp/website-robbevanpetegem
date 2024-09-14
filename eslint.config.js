import configs from "@tree-company/eslint-config";

export default [
  ...configs.configs.default,
  {
    ignores: ["dist/"],
  },
];
