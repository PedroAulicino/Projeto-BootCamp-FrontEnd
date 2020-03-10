const { addBabelPlugin, override } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "babel-plgin-root-import",
    {
      rootPathSuffix: "src"
    }
  ])
);
