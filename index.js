/* eslint-disable filenames/no-index */

module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/filenames",
    "./rules/import",
    "./rules/jest",
    "./rules/node",
    "./rules/strict",
    "./rules/style",
    "./rules/variables"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
};
