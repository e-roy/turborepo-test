const withTM = require("next-transpile-modules")(["test-turbo"]);

module.exports = withTM({
  reactStrictMode: true,
});
