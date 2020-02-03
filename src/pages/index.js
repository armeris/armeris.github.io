import React from 'react';
import LayoutHeader from '../components/LayoutHeader';
import LayoutContent from '../components/LayoutContent';
import Content from '../components/Content';
import HeaderContent from '../components/HeaderContent';

const IndexPage = () => (
    <>
  <LayoutHeader>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <HeaderContent/>
      </div>
        </LayoutHeader>
        <LayoutContent>
        <Content />
        </LayoutContent>
        </>
);

export default IndexPage;
