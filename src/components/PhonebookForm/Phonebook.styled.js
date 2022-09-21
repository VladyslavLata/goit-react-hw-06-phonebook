import styled from 'styled-components';
// import { ErrorMessage } from 'formik';

export const LabelName = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;

// export const E = styled(ErrorMessage)`
//   color: #454545;
// `;
