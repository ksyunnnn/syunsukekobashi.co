import React from 'react';
import styled from 'styled-components';
import Photo from '../../atoms/Photo';

const Wrapper = styled.div`
  display: inline-block;
  > img {
    ${props => (props.isSlected ? 'border: 2px #333 solid' : '')}
  }
`;

export default (props) => {
  const { onClick, isSlected, src } = props;
  return (
    <Wrapper onClick={onClick} isSlected={isSlected}>
      <Photo src={src} />
    </Wrapper>
  );
};
