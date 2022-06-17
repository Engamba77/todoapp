import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.color || 'cyan'};
  font-size: large;
  padding: 8px;
  border-radius: 3px;
  cursor: 'none';
`;

// color ==> props
