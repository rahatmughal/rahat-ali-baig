module.exports = {
    root: true,
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    rules: {
      // Add custom rules here
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  };