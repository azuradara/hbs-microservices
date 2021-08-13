import styled from 'styled-components';

const TextInput = styled.input`
  border: 2px solid ${(props) => props.theme.persianIndigo};
  display: block;
  font-size: 0.9rem;
  padding: 0.25rem;
  width: 100%;
`;

export default TextInput;
