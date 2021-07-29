const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([{ trailingSlash: true }]);
