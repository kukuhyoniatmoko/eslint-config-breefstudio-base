module.exports = {
  extends: [
    "plugin:flowtype/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
    "prettier/flowtype"
  ],
  plugins: ["flowtype", "prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
    es6: true
  }
};
