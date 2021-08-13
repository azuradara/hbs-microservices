import styled from 'styled-components';

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FullScreen;
