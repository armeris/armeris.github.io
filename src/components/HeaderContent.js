import React from 'react';
import Content from './Content';
import config from '../../config';
export default function HeaderContent() {
    return (
        <>
    <header id="header">
      <h1>{config.pageTitle}</h1>
      <h2>{config.weddingDate}</h2>
          </header>
            <Content/>
            </>
  );
}
