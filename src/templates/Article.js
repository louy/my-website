import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Footer from '../components/Footer';
import { TransitionStatusContext } from '../components/Layout';

import rehypeReact from 'rehype-react';
import { SocialLinks, SocialLink } from '../components/SocialLinks';
import Activity from '../components/Activity';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'social-links': SocialLinks,
    'social-link': SocialLink,
    activity: Activity,
  },
}).Compiler;

export default function Article({ data }) {
  const { frontmatter, htmlAst } = data.markdownRemark;
  const transitionState = useContext(TransitionStatusContext);
  return (
    <>
      <Helmet title={frontmatter.title}>
        <link rel="canonical" href={frontmatter.path} />
      </Helmet>

      <div className={`body is-article-visible`}>
        <div id="wrapper">
          <div id="main">
            <Link to={`/`} className="home-link">
              {data.site.siteMetadata.name}
            </Link>
            <article
              id="contact"
              className={`${
                transitionState === 'entering' || transitionState === 'entered'
                  ? 'active'
                  : ''
              } ${transitionState === 'entered' ? 'timeout' : ''}`}
            >
              {renderAst(htmlAst)}

              <Link className="close" to={`/`} />
            </article>
          </div>
          <Footer />
        </div>
        <div id="bg"></div>
      </div>
    </>
  );
}
Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query Article($path: String!) {
    site {
      siteMetadata {
        name
      }
    }

    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
    }
  }
`;
