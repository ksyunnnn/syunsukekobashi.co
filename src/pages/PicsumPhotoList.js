import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import DefaultLayout from '../components/layout';
import SEO from '../components/seo';

import FloatableHeader from '../components/atomic/molecules/FloatableHeader';
import PicsumPhotoList from '../components/atomic/organisms/PicsumPhotoList';

const Header = styled(FloatableHeader)`
    line-height: 64px;
    text-transform: uppercase;
`;

const Layout = styled(DefaultLayout)`
    font-family: "Roboto Mono",monospace;
    line-height: 1.15;
`;

export default props => (
  <Layout>
    <SEO title="PicsumPhotoList" />
    <Header>Picsum photo list</Header>
    <PicsumPhotoList />
  </Layout>
);
