module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint-config-airbnb",
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/jsx-uses-react": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
