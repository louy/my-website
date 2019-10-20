import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return (
    <footer id="footer">
      <p className="copyright">
        &copy; {data.site.siteMetadata.name}. Built with:{' '}
        <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
      </p>
    </footer>
  );
};

export default Footer;
