import React from 'react';

import styled from 'styled-components';
import { Placeholder } from 'semantic-ui-react';
import List from './List';

const Wrapper = styled.div`
    padding: 0 16px;
    font-size: 16px;
    letter-spacing: 1px;
`;

const Section = ({ questionTitle, data, isLoading }) => {
  const filteredData = data.filter(question => question.question === questionTitle);
  const renderData = (loading, list) => {
    if (loading) {
      return (
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      );
    }
    if (list.length) return list.map(v => <List key={v.id} {...v} />);

    return <p>回答なし</p>;
  };
  return (
    <div>
      <h2 style={{ padding: '40px 0' }}>{questionTitle}</h2>
      {renderData(isLoading, filteredData)}
    </div>
  );
};

export default props => (
  <Wrapper>
    <Section questionTitle="AtomicDesign実践に関しての悩み" {...props} />
    <Section questionTitle="AtomicDesignに関して知りたいこと" {...props} />
    <Section questionTitle="AtomicDesignのダメなところ" {...props} />
    <Section questionTitle="その他なにか質問" {...props} />
  </Wrapper>
);
