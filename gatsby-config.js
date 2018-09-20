module.exports = {
  siteMetadata: {
    title: '100 Coaches',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          // {
          //   resolve: `gatsby-remark-relative-images`,
          //   options: {
          //     name: "uploads" // Must match the source name ^
          //   }
          // },
          // { 
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //   },
          // },
          
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/components/all.scss`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
