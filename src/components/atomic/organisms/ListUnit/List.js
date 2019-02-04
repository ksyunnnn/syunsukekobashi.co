import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components';

const Wrapper = styled.div`
    :after {
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        background: #DEDEDF;
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

export default props => (
    <Wrapper>
        <Answer>{props.answer}</Answer>
        <small>{props.roles}</small>
    </Wrapper>
);