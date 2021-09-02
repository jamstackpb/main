const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, //dziala
        devIndicators: {
            autoPrerender: false,
        },
    },
]);
