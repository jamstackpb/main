const withPlugins = require('next-compose-plugins');

module.exports = {
    basePath: '/main',
    assetPrefix: '/main',
    withPlugins([{ trailingSlash: True }])
}
