import React from 'react';
import LayoutHeader from '../components/LayoutHeader';
import LayoutContent from '../components/LayoutContent';
import HeaderContent from '../components/HeaderContent';
import ComponentLocation from '../components/ComponentLocation';
import ComponentSchedule from '../components/ComponentSchedule';
import ComponentOther from '../components/ComponentOther';
import Separator from '../components/ComponentSeparator';
import Footer from '../components/Footer';

const IndexPage = () => (
  <>
    <LayoutHeader>
      <div id="bg">
        <Separator />
      </div>
      <div id="overlay" />
      <div id="main">
        <HeaderContent />
      </div>
    </LayoutHeader>
    <LayoutContent>
      <ComponentLocation />
      <ComponentSchedule />
      <ComponentOther />
    </LayoutContent>
    <Footer/>
    <div id="blackcat"></div>
  </>
);

export default IndexPage;
