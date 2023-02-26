import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.87rem;
  margin-bottom: 0.5rem;
`;
