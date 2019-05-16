import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/organisms/Header';

import { media } from '../helpers/media-query';

const Wrapper = styled.main`
  padding: 120px 16px;
  max-width: 1040px;
  margin: auto;
  
  h1 {
    font-size: 120px;
    &.ja {
      font-size: 24px;
      letter-spacing: 4px;
      font-weight: 300;
      text-align: right;
    }
  }

  ${media.phone`
  h1 {
    font-size: 36px;
    &.ja {
      font-size: 18px;
      letter-spacing: 4px;
      font-weight: 300;
      text-align: right;
    }
  }
  `}
  section {
    padding: 180px 0;
    ${media.phone`
    padding: 40px 0;
    `}
  }
  p {
    padding: 24px 0;
    line-height: 2;
  }
  b {
    &.work {
      font-size: 28px;
    }
    &.doya {
      font-size: 28px;
    }
  }
  li {
    line-height: 2;
  }
  a {
    color: #333;
  }

  .social {
    i {
      margin-left: 8px;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['portfolio', 'react', 'syunsukekobashi.co']} />
    <Header />
    <Wrapper>
      <h1 className="en">
SYUNSUKE
        <br />
KOBASHI
      </h1>
      <h1 className="ja">小橋俊介(コバシ シュンスケ)</h1>
      <section>
        <p>
        仕事は
          <b className="work">ビジネスと開発。</b>
          <br />
          <b className="birthday">1992/02/23</b>
生まれ。
        </p>
        <p>
できることは,
          <b>Webアプリ開発 / サイト制作 / React / Vue / HTML/CSS / Github / InVision / Figma </b>
とか。
        </p>
        <p>
          20xx年における
          <b className="doya">新進気鋭のフロントエンドエンジニア</b>
ですよ。
        </p>
      </section>
      <section className="social">
        <li>
          <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noopener noreferrer">
Twitter
            <i className="fas fa-external-link-alt" />
          </a>

        </li>
        <li>
          <a href="https://www.facebook.com/ksyunnnn" target="_blank" rel="noopener noreferrer">Facebook</a>
          <i className="fas fa-external-link-alt" />
        </li>
        <li>
          <a href="https://medium.com/syunsukekobashi" target="_blank" rel="noopener noreferrer">Medium</a>
          <i className="fas fa-external-link-alt" />
        </li>
        <li>
          <a href="https://github.com/ksyunnnn" target="_blank" rel="noopener noreferrer">Github</a>
          <i className="fas fa-external-link-alt" />
        </li>
      </section>
    </Wrapper>
    <footer style={{ textAlign: 'center', lineHeight: '48px' }}><Link to="/"><i className="fas fa-glasses" /></Link></footer>
  </Layout>
);

export default IndexPage;
