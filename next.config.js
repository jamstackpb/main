const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/main`, //potrzebny
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, //dziala
        devIndicators: {
            autoPrerender: false,
        },
    },
]);
