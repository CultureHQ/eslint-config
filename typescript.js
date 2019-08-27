module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
