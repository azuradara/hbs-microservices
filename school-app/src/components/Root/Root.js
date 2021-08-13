import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>gooba</Container>
    </Wrapper>
  );
};

export default Root;
