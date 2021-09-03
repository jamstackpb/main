const withPlugins = require('next-compose-plugins');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH, //potrzebny
        assetPrefix: isProd ? '/main : '', //dziala czy niedziala, -> niepotrzebny
        devIndicators: {
            autoPrerender: false,
        },
    },
]);
