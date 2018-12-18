module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "function-paren-newline": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "double"],
    "react/jsx-filename-extension": ["warning", { "extensions": [".js"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
    "react/prop-types": "off"
  }
};
