require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Marshall Goldsmith 100 Coaches',
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
