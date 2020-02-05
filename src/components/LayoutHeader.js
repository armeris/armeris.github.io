import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import '../assets/sass/main.scss';
const LayoutHeader = ({ children, darkText }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="es" />
        </Helmet>
        <div id="wrapper-header" className={darkText ? 'dark-text' : ''}>
          {children}
        </div>
      </>
    )}
  />
);

LayoutHeader.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default LayoutHeader;
