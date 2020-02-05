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
          <meta property="og:title" content="Boda Laura & Rubén"/>
          <meta property="og:url" content="https://www.bodalaurayruben.com"/>
          <meta property="og:image" content="https://www.bodalaurayruben.com/static/test-bg-94a248e26c95434b977311765a2bef6c.jpg"/>
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
