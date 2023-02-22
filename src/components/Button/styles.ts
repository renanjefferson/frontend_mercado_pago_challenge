import { ButtonProps } from './index';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 0.37rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'initial')};
`;
