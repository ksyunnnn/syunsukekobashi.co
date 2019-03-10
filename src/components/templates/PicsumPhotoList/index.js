import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 80px 16px;
  display: grid;
  grid-template-columns: 1fr 400px;
  position: relative;
  .side {
    padding: 80px 0;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    min-height: calc(100vh - 80px);
    overflow-y: auto;
  }
`;

export default (props) => {
  const { header, sideLeft, sideRight } = props;
  return (
    <>
      {header}

      <Content>
        <div>{sideLeft}</div>
        <div className="side">{sideRight}</div>
      </Content>
    </>
  );
};
