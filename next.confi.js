const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([
  [
    withOptimizedImages,
    {
      assetPrefix: isProd ? "/" : "",
    },
  ],
  [{ trailingSlash: true }],
]);
