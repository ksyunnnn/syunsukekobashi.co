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

const Header = ({ siteTitle }) => (
  <Wrapper>
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
