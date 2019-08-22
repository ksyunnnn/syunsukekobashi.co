import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/organisms/Header';

import { media } from '../helpers/media-query';

const Wrapper = styled.main`
  min-height: 100vh;

  section.hero-view {
    height: 100vh;
    padding-top: 25vh;
    h1 {
    font-size: 18vh;
      &.ja {
        font-size: 3vh;
        letter-spacing: 2rem;
        font-weight: 300;
      }
    }
    ${media.phone`
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 18vw
        &.ja {
          font-size: 18px;
          letter-spacing: 4px;
          font-weight: 300;
          text-align: right;
        }
      }
      `}
  }

  section {
    padding: 180px 4vw;
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
      <section className="hero-view">
        <h1 className="en">
          SYUNSUKE
          <br />
          KOBASHI
        </h1>
        <h1 className="ja">小橋俊介(コバシ シュンスケ)</h1>
      </section>
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
          <a href="https://www.facebook.com/ksyunnnn" target="_blank" rel="noopener noreferrer">
Facebook
            <i className="fas fa-external-link-alt" />
          </a>

        </li>
        <li>
          <a href="https://medium.com/syunsukekobashi" target="_blank" rel="noopener noreferrer">
Medium
            <i className="fas fa-external-link-alt" />
          </a>

        </li>
        <li>
          <a href="https://github.com/ksyunnnn" target="_blank" rel="noopener noreferrer">
Github
            <i className="fas fa-external-link-alt" />
          </a>

        </li>
        <p style={{ letterSpacing: '4px' }}>連絡はDMで。</p>
      </section>
    </Wrapper>
    <footer style={{ textAlign: 'center', lineHeight: '48px' }}><Link to="/"><i className="fas fa-glasses" /></Link></footer>
  </Layout>
);

export default IndexPage;
