import { InputProps } from './index';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border: 1px solid var(--color-greys-400);
  border-radius: 0.37rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.2rem 0;

  & img {
    margin-right: 0.5rem;
  }
`;
export const Input = styled.input<InputProps>`
  border: 0;
  border-radius: 0.37rem;
  flex: 1;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'initial')};

  &:focus {
    box-shadow: var(--color-greys-100) 0px 0px 0px 2px,
      var(--color-greys-700) 0px 0px 0px 4px;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid var(--error-color);
      &:focus {
        border: 1px solid var(--error-color);
      }
    `}
`;

export const ErrorMessage = styled.p`
  align-items: center;
  color: var(--error-color);
  display: flex;
  font-size: 0.81rem;
  font-weight: var(--font-weight-semibold);
  margin: 0.2rem 0;
  max-width: 100%;
  padding-left: 4px;
  word-break: break-word;

  & svg {
    margin-right: 0.2rem;
  }
`;
