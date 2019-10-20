import React from 'react';
import PropTypes from 'prop-types';

export const SocialLinks = ({ children }) => {
  return <ul className="icons">{children}</ul>;
};
SocialLinks.propTypes = {
  children: PropTypes.node,
};

export const SocialLink = ({ url, icon, label }) => {
  return (
    <li>
      <a title={label} href={url} className={`icon fa-${icon}`}>
        <span className="label">{label}</span>
      </a>
    </li>
  );
};
SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
