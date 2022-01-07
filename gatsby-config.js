require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: 'Marshall Goldsmith 100 Coaches',
    description: `100 Coaches offers services, events, online courses and other opportunities to inspire, develop, and energize leaders for the future. We amplify the collective impact of our exclusive community to improve the world.`,
    author: `Clay Giffin // Doublespace`,
    siteUrl: `https://www.100coaches.com/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133287110-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `${process.env.DATO_API_KEY}`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // // Custom API base URL
        // apiUrl: 'https://site-api.datocms.com/',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100-coaches-theme`,
        short_name: `100coaches`,
        start_url: `/`,
        background_color: `#195848`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.100coaches.com/`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
