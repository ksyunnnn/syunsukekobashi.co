import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Tab } from 'semantic-ui-react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import ListUnit from '../components/organisms/ListUnit';
import Image from '../components/image';

const Wrapper = styled.div`
  max-width: 480px;
  margin: auto;
  padding-bottom: 80px;
`;

const Header = styled.div`
  text-align: center;
  padding: 16px;
  .gatsby-image-wrapper {
    width: 160px;
    margin: auto;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 24px 16px;
`;

class ThinkAtomicDesignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      questions: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://script.google.com/macros/s/AKfycbx2rkfiMpCWmrJxxwO4Rjw2ouh4NDNGaYZjiUVKQTZ2Q2hMeGc/exec',
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            questions: result,
          });
        },
      );
  }

  render() {
    const { questions, isLoading } = this.state;
    return (
      <Layout>
        <SEO title="ThinkAtomicDesign" />
        <Wrapper>
          <Header>
            <a href="https://thinkatomicdesign.connpass.com/" target="_blank" rel="noopener noreferrer"><Image /></a>
            <h1>ThinkAtomicDesign</h1>
          </Header>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={
            [
              { menuItem: '第2回', render: () => <ListUnit data={questions.filter(question => question.times === 2)} isLoading={isLoading} /> },
              { menuItem: '第1回', render: () => <ListUnit data={questions.filter(question => question.times === 1)} isLoading={isLoading} /> },
            ]
          }
          />
        </Wrapper>
        <Footer>
          <small><a href="https://twitter.com/hashtag/ThinkAtomicDesign" target="_blank" rel="noopener noreferrer">#ThinkAtomicDesign</a></small>
        </Footer>
      </Layout>
    );
  }
}

export default ThinkAtomicDesignPage;
