import React from 'react';

import styled from 'styled-components';

import Initialised from './Initialised';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Initialised />
    </Wrapper>
  );
};

export default Root;
