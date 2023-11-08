const config = require('./config');

module.exports = {
        pathPrefix: config.pathPrefix,
        siteMetadata: {
                title: config.siteTitle,
        },
        plugins: [
                'gatsby-plugin-sass',
        ],
};
