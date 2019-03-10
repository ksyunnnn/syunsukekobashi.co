import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    cursor: pointer;
    ${props => (props.selcted ? `
        position: relative;
        :before {
            content: '';
            display: block;
            width: 2px;
            height: 90%;
            background: #333;
            position: absolute;
            left: -16px;
        }
    ` : '')}
    :after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #dededfb5;
        margin: 1em 0;
    }
    > small {
        color: #1b1c1d;
        background: #eee;
    }
`;

const Answer = styled.div`
    margin-bottom: .5em;
`;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelcted: false,
    };
  }

    toggleSelected = () => this.setState(prevState => ({ isSelcted: !prevState.isSelcted }))

    render() {
      const { isSelcted } = this.state;
      const { answer, roles } = this.props;
      return (
        <Wrapper selcted={isSelcted} onClick={this.toggleSelected}>
          <Answer>{answer}</Answer>
          <small>{roles}</small>
        </Wrapper>
      );
    }
}
