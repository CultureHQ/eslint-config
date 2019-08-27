/* eslint-disable filenames/no-index */

module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/filenames",
    "./rules/import",
    "./rules/jsx-a11y",
    "./rules/node",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/strict",
    "./rules/style",
    "./rules/variables"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true
    }
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
