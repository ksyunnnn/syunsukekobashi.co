import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    width: 160px;
    height: 160px;
    background-image: url(${props => props.url});
    background-size: cover;

    cursor: pointer;
    ${props => (props.isSelect ? `
        border: 20px solid;
    ` : '')}
`;

export default (props) => {
  const { onClick, isSelect, text } = props;

  return (
    <Wrapper {...props} onClick={onClick} isSelect={isSelect}>{text}</Wrapper>
  );
};
