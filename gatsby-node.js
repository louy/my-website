const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const homeTemplate = path.resolve(`src/templates/Home.js`);
  const pageTemplate = path.resolve(`src/templates/Page.js`);
  const articleTemplate = path.resolve(`src/templates/Article.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  createPage({
    path: '/',
    component: homeTemplate,
  });
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: articleTemplate,
    });
  });
};
