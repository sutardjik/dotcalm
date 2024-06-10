/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://dotcalm.pages.dev`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dotcalm.pages.dev',
        sitemap: 'https://dotcalm.pages.dev/sitemap/sitemap-index.xml',
        policy: [
          { userAgent: '*', disallow: '/' },
          { userAgent: '*', disallow: '/static/' },
          { userAgent: '*', disallow: '/src/' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/img/favicon.ico',
      },
    },
  ],
};