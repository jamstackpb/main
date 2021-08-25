const withPlugins = require('next-compose-plugins');

module.exports = {
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
