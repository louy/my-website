import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

export default function Page({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <>
      <Helmet title={frontmatter.title}>
        <link rel="canonical" href={frontmatter.path} />
      </Helmet>
      <div id="wrapper" className="page">
        <Link to={`/`} className="home-link">
          {data.site.siteMeta.name}
        </Link>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query Page($path: String!) {
    site {
      siteMetadata {
        name
      }
    }

    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
