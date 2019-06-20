const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Toastmasters Košice',
    siteUrl: 'https://toastmasterskosice.sk',
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src', 'images')
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: path.join(__dirname, 'src', 'data')
    }
  }, {
    resolve: 'gatsby-plugin-gtag',
    options: {
      // your google analytics tracking id
      trackingId: `UA-142522378-1`,
      // Puts tracking script in the head instead of the body
      head: false,
      // enable ip anonymization
      anonymize: true,
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Toastmasters Košice',
      short_name: 'TM Košice',
      start_url: '/',
      background_color: '#FFFFFF',
      theme_color: '#772432',
      display: 'standalone',
      icon: path.join(__dirname, 'src/images/tmke-logo.jpg')
    }
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap'
  ]
}
