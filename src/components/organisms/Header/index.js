import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import { media } from '../../../helpers/media-query';

const Wrapper = styled.header`
  text-align: right;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 80px;
  ${media.phone`
    padding: 0 16px;
  `};
  i {
    font-size: 24px;
    color: #333;
  }
`;

const msgs = ['こばしゅんさん、仕事ありますよ！', 'こばしゅんさん、5000兆円あげましょうか？', 'おっけい！じゃあ今から渋谷集合で！🍻', 'こばしゅんさん、応援しています！'];

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const Header = ({ siteTitle }) => (
  <Wrapper>
    <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=https://syunsukekobashi.co/&screen_name=ksyunnnn&text=${msgs[getRandomInt(msgs.length)]}`} className="twitter-hashtag-button" data-show-count="false"><i className="fab fa-twitter fa-lg" style={{ color: '#5c5c5c', fontSize: '16px', marginRight: '1rem' }} /></a>
    <Link to="/"><i className="fas fa-glasses" /></Link>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
