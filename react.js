module.exports = {
  env: {
    browser: true
  },
  extends: [
    "./rules/jsx-a11y",
    "./rules/react",
    "./rules/react-hooks"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
