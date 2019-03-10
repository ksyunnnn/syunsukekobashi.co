import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/organisms/Header';
import Profile from '../components/organisms/Profile';

import { MainContainer } from '../components/organisms/Profile/style';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'portfolio', 'react', 'syunsukekobashi.co']} />
    <Header />
    <MainContainer>
      <Profile />
    </MainContainer>
  </Layout>
);

export default IndexPage;
