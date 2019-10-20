module.exports = {
  siteMetadata: {
    title: 'Louay Alakkad | Tech Lead & Solutions Architect in London',
    author: 'Louay Alakkad',
    description: 'The personal website of Louay Alakkad',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Louayt Alakkad',
        short_name: 'LA',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/louay.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-extract-schema',
  ],
};
