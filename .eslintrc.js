// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  Plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-used-styles": "error",
  },
};
