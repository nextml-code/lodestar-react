const webpack = require("webpack");

module.exports = {
  // This is because of a bug when using react-scripts 5
  // See: https://github.com/styleguidist/react-styleguidist/issues/1910
  dangerouslyUpdateWebpackConfig(config) {
    config.module.rules.push({
      test: /.\.md$/,
      type: "javascript/auto",
    });

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
        "react-styleguidist/lib/loaders/utils/client/requireInRuntime"
      )
    );

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
        "react-styleguidist/lib/loaders/utils/client/evalInContext"
      )
    );

    return config;
  },
  components: "src/components/**/*.{js,jsx}",
  exampleMode: "expand",
  styleguideDir: "docs",
};
