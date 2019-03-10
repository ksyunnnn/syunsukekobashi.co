import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '../../../helpers/media-query';


export const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 2px;
  :hover,
  :active {
    color: inherit;
  }
`;

export const AnchorStyled = styled.a`
  color: inherit;
  font-size: 4rem;
  text-decoration: none;
  border-radius: 20%;
  text-shadow: 2px 0px 2px rgba(0,0,0,.2);
  :not(:last-child){
    margin-right: 2rem;
    ${media.phone`
    margin-right: 1rem;
  `};
  }
  :hover,
  :active {
    color: inherit;
  }
`;

export const MainContainer = styled.div`
  padding: 160px 160px;
  ${media.phone`
    padding: 20vh 16px;
  `};
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? 'space-between' : 'none')};
`;

export const OnlySPWrapper = styled.div`
  display: none;
  ${media.phone`
    display: inline;
  `};
`;

export const OnlyPCWrapper = styled.div`
  display: inline;
  ${media.phone`
    display: none;
  `};
`;

export const Footer = styled.footer`
  line-height: 80px;
  padding: 0 160px;
  ${media.phone`
    padding: 0 16px;
  `};
`;
