module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    // We need to explicitly state this here since it looks like the recommended
    // rules actually override this.
    "import/extensions": ["error", "ignorePackages", {
      js: "never",
      ts: "never",
      tsx: "never"
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_"
      }
    ]
  }
};
