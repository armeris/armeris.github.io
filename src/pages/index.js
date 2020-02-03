import React from 'react';
import LayoutHeader from '../components/LayoutHeader';
import LayoutContent from '../components/LayoutContent';
import HeaderContent from '../components/HeaderContent';
import ComponentLocation from '../components/ComponentLocation';
import ComponentSchedule from '../components/ComponentSchedule';
import ComponentOther from '../components/ComponentOther';

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
        <ComponentLocation/>
        <ComponentSchedule/>
        <ComponentOther/>
  </LayoutContent>
     </>
);

export default IndexPage;
