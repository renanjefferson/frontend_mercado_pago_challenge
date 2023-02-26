import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: var(--color-greys-100);
  border-radius: 0.75rem;
  padding: 1rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.12rem;
  font-weight: var(--font-weight-semibold);
  margin: 0;import { shade } from 'polished';
  margin-bottom: 1rem;
  max-width: 100%;
  word-break: break-word;
`;

export const Form = styled.form`
  & button[type='submit'] {
    background-color: var(--primary-color);
    color: var(--color-greys-100);
    font-size: 1rem;
    font-weight: var(--font-weight-semibold);
    padding: 0.87rem 3rem;

    &:hover {
      background-color: ${shade(0.1, '#009EE3')};
    }

    & svg {
      margin-right: 0.5rem;
    }
  }
`;

export const Wide = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
  font-size: 0.87rem;
  font-weight: var(--font-weight-regular);
  margin-bottom: 0.25rem;
  word-break: break-word;
`;

export const ChangePaymentMethod = styled.div`
  margin: 2rem 0;
  border-top: 1px solid var(--color-greys-400);

  & button {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
  }
`;
