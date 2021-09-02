const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH, //potrzebny

        devIndicators: {
            autoPrerender: false,
        },
    },
]);
