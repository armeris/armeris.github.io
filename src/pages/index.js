import React from 'react';
import Layout from '../components/layout';
import Content from '../components/Content';
import HeaderContent from '../components/HeaderContent';

const IndexPage = () => (
        <>
        <head><title>Uala</title></head>
        <body>
  <Layout>
    <>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <HeaderContent/>
        <Content />
      </div>
    </>
        </Layout>
        </body>
        </>
);

export default IndexPage;
