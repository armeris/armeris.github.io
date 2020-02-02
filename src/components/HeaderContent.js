import React from 'react';

import config from '../../config';
export default function HeaderContent() {
  return (
    <header id="header">
      <h1>{config.pageTitle}</h1>
      <p>{config.weddingDate}</p>
    </header>
  );
}
