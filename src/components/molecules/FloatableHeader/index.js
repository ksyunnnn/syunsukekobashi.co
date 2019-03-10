import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
    padding: 0 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,.5);
    position: fixed;
    width: 100%;
    background: #fff;
`;

export default ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);
