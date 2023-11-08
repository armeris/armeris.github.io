import React from 'react';
import PropTypes from 'prop-types';
import '../assets/sass/main.scss';
const LayoutHeader = ({ children, darkText }) => {
        return (
                <>
                        <div id="wrapper-header" className={darkText ? 'dark-text' : ''}>
                                {children}
                        </div>
                </>
        );
};

LayoutHeader.propTypes = {
        children: PropTypes.node.isRequired,
        darkText: PropTypes.bool,
};
export const Head = () => {
        <>
                <html lang="es" />
                <meta property="og:title" content="Boda Laura & Rubén" />
                <meta property="og:description" content="17 de Octubre de 2020" />
                <meta property="og:url" content="https://www.bodalaurayruben.com" />
                <meta
                        property="og:image"
                        content="https://www.bodalaurayruben.com/static/invi_back-ca50c893347ce30d262e75a0cc48d5e3.jpg"
                />
        </>
}
export default LayoutHeader;
