import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { TransitionGroup, Transition } from 'react-transition-group';

import '../assets/scss/main.scss';

export const TransitionStatusContext = createContext(null);

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          name
          description
          keywords
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.name}`}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <TransitionGroup>
        <Transition
          key={location.pathname}
          timeout={{
            enter: 250,
            exit: 250,
          }}
        >
          {status => (
            <TransitionStatusContext.Provider value={status}>
              {children}
            </TransitionStatusContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
