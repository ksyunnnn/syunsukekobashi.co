import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 80px 16px;
  display: grid;
  grid-template-columns: 1fr 400px;
`;

export default (props) => {
  const { header, sideLeft, sideRight } = props;
  return (
    <>
      {header}

      <Content>
        <div>{sideLeft}</div>
        <div>{sideRight}</div>
      </Content>
    </>
  );
};
