import styled from 'styled-components';

const AppGrid = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.offWhite};
  display: grid;
  grid-template-columns: 16rem calc(100vw - 16rem);
`;

export default AppGrid;
