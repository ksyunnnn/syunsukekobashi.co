import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import { media } from '../../../helpers/media-query';

const Wrapper = styled.header`
  font-size: 0.8em;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 50px;
  color: #333;
  padding: 0 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  ${media.phone`
    padding: 0 16px;
  `};
`;

const Logo = styled.div`
  letter-spacing: 1.5px;
  display: inline;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Logo>syunsukekobashi.co</Logo>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
