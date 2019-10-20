import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Header = props => {
  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          name
          headline
          description
        }
      }

      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  return (
    <header id="header">
      <div className="content">
        <div className="inner">
          <h1>{data.site.siteMetadata.name}</h1>
          <p>{data.site.siteMetadata.headline}</p>
        </div>
      </div>

      {data.allMarkdownRemark.edges.length === 0 ? null : (
        <nav>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.frontmatter.path}>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
