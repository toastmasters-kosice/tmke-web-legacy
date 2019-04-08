const path = require('path')

module.exports = {
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
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet'
  ]
}
