const path = require("path");

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
      alias: {
        "@": path.resolve(__dirname, "../src"),
        public: path.resolve(__dirname, "../public"),
      },
    },
  });
};
