/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.dotcalm.pages.dev`, 
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.dotcalm.pages.dev', 
        sitemap: 'https://www.dotcalm.pages.dev/sitemap/sitemap-index.xml', 
        policy: [
          { userAgent: '*', disallow: '/' },
          { userAgent: '*', disallow: '/static/img/' },
          { userAgent: '*', disallow: '/static/' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'public/static/img/favicon.ico',
      },
    },
  ],
};