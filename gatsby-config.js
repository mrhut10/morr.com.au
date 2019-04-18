module.exports = {
  siteMetadata: {
    title: `Morr Homes and Projects`,
    description: ``,
    email: `admin@morrproperty.com.au`, // used in GraphQL queries so address only needs to be entered in one place
    phone: `+61265839618`, // e.g. +61400000000
    phoneFormatted: `02 6583 9618`, // e.g. 0400 000 000
    siteUrl: `https://www.morr.com.au`, // used for `gatsby-plugin-sitemap` to generate correct URLs
    author: ``, // e.g. @phirannodesigns — used for twitter cards in SEO component
    facebook: ``, // e.g. https://www.facebook.com/phirannodesigns — used in GraphQL queries so address only needs to be entered in one place
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#62B257`,
        theme_color: `#62B257`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
