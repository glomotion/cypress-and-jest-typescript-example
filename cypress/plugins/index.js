// The @cypress/webpack-dev-server package replaces
// @cypress/webpack-preprocessor
const { startDevServer } = require("@cypress/webpack-dev-server");
const webpackConfig = require("../../webpack.cypress.config");

module.exports = (on, config) => {
  // You must use the dev-server:start event instead of the file:preprocessor event
  on("dev-server:start", (options) => {
    return startDevServer({ options, webpackConfig });
  });

  return config;
};
