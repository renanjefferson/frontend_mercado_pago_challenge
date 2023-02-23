import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-greys-100);
  border-radius: 0.75rem;
  padding: 1rem;
  width: 100%;

  & button {
    justify-content: space-between;
    background-color: var(--color-greys-300);
    padding: 1rem;

    & + button {
      margin-top: 1rem;
    }

    &:hover {
      background-color: var(--color-greys-400);
    }

    & h2 {
      font-size: 1rem;
      font-weight: var(--font-weight-semibold);
    }

    & svg {
      color: var(--primary-color);
    }
  }
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    color: var(--primary-color);
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.12rem;
  font-weight: var(--font-weight-semibold);
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  word-break: break-word;
`;
