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
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  word-break: break-word;
`;

export const Form = styled.form`
  & button {
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

export const Fields = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;
`;

export const Box = styled.div``;

export const Label = styled.label`
  display: block;
  cursor: pointer;
  font-size: 0.87rem;
  font-weight: var(--font-weight-regular);
  margin-bottom: 0.25rem;
  word-break: break-word;
`;
