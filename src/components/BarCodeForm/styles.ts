import styled from 'styled-components';

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

export const ChangePaymentMethod = styled.div`
  margin: 2rem 0;
  border-top: 1px solid var(--color-greys-400);

  & button {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
  }
`;
