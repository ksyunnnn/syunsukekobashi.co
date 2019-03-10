import React from 'react';
import styled from 'styled-components';

const Base = styled.img`
    display: inline-block;
    background-image: url(${props => props.url});
    background-size: cover;
    box-shadow: 0px 2px 2px rgba(0,0,0,.25);
`;

const Small = styled(Base)`
    width: 160px;
    height: 160px;
`;

const Medium = styled(Base)`
    width: 400px;
    height: 400px;
`;

export default (props) => {
  const { src } = props;
  switch (props) {
    case props.small:
      return <Small src={src} {...props} />;

    case props.medium:
      return <Medium src={src} {...props} />;

    default:
      return <Small src={src} {...props} />;
  }
};
