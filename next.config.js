const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH, //potrzebny
        //assetPath: process.env.NEXT_PUBLIC_BASE_PATH, //nie dziala
        devIndicators: {
            autoPrerender: false,
        },
    },
]);