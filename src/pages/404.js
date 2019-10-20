import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

const NotFoundPage = ({ data }) => (
  <>
    <Helmet title={'Not found'} />
    <div id="wrapper" className="page">
      <Link to={`/`} className="home-link">
        {data.site.siteMetadata.name}
      </Link>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </>
);
NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        name
      }
    }
  }
`;
