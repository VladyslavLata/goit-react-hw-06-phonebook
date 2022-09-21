import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Number = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;
