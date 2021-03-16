module.exports = {
  siteMetadata: {
    siteUrl: 'https://louay.alakkad.me',
    title: 'Louay Alakkad | Tech Lead & Solutions Architect in London',
    name: 'Louay Alakkad',
    headline: 'Award-wining tech lead & solution architect.',
    author: 'Louay Alakkad',
    description:
      'The personal website of Louay Alakkad, an Award-wining tech lead & solution architect',
    keywords:
      'Louay Alakkad, tech lead, software engineer, solutions architect, aws architect',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Louay Alakkad',
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
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: ['social-links', 'social-link', 'activity'],
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 560,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-sitemap',
  ],
};
