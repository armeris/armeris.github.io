import React from 'react';
import PropTypes from 'prop-types';
import '../assets/sass/main.scss';

const LayoutContent = ({children}) => (
        <div id="wrapper-content">
          {children}
        </div>
);

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default LayoutContent;
