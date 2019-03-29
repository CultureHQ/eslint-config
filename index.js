/* eslint-disable filenames/no-index */

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: [
    "filenames",
    "react-hooks"
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "function-paren-newline": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-useless-catch": "warn",
    "no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      ignoreRestSiblings: true,
      varsIgnorePattern: "^_"
    }],
    "no-void": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "prefer-named-capture-group": "off",
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],

    // eslint-plugin-filenames
    "filenames/no-index": "error",
    "filenames/match-exported": "error",
    "filenames/match-regex": "off",

    // eslint-plugin-jsx-a11y
    "jsx-a11y/control-has-associated-label": "error",

    // eslint-plugin-import
    "import/no-named-export": "off",

    // eslint-plugin-react
    "react/jsx-filename-extension": ["warning", { extensions: [".js"] }],
    "react/jsx-fragments": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
    "react/prop-types": "off",

    // eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
