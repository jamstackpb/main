const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH, //potrzebny
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, //dziala czy niedziala, -> niepotrzebny
        devIndicators: {
            autoPrerender: false,
        },
    },
]);
