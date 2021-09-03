const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH, //potrzebny
<<<<<<< HEAD
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, //dziala czy niedziala, -> niepotrzebny
=======
        assetPrefix: isProd ? '/main' : '', //dziala czy niedziala, -> niepotrzebny
>>>>>>> f726f553b6d89a367934ce7d6d2345f2b63a9ee7
        devIndicators: {
            autoPrerender: false,
        },
        images: {
            path: `${process.env.NEXT_PUBLIC_BASE_PATH}/_next/image`,
        },
    },
]);
