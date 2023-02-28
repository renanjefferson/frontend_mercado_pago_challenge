import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: var(--success-color);
  border-radius: 0.75rem 0.75rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
`;

export const Circle = styled.div`
  align-items: center;
  background-color: var(--color-greys-100);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;
  width: 80px;

  & svg {
    color: var(--success-color);
  }
`;

export const Check = styled.div`
  align-items: center;
  background-color: var(--color-greens-500);
  bottom: 0;
  border-radius: 50%;
  color: white;
  display: flex;
  height: 24px;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 24px;

  & svg {
    color: var(--color-greys-100);
  }
`;

export const Message = styled.div`
  color: var(--color-greys-100);
  text-align: center;
  & h1 {
    color: var(--color-greys-100);
    font-size: 1.5rem;
    font-weight: var(--font-weight-semibold);
    line-height: 1.87rem;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

export const Content = styled.div`
  background-color: var(--color-greys-100);
  border-radius: 0.75rem;
  margin: 0 auto;
  max-width: 450px;
  min-height: 320px;
  padding-bottom: 2rem;
  width: 100%;
`;

export const Main = styled.main`
  background-color: var(--color-greys-100);
  border-radius: 0.5rem;
  font-size: 0.87rem;
  margin: 0 auto;
  margin-top: -20px;
  max-width: 400px;
  padding: 1rem;
  text-align: center;
`;

export const BoletoContainer = styled.div`
  & a {
    align-items: center;
    color: var(--primary-color);
    display: flex;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    justify-content: center;
    margin: 0.5rem 0;
  }
`;

export const CreditCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const Icon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-greys-400);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Info = styled.div`
  text-align: left;
`;

export const GoBack = styled.div`
  margin: 1rem 0;
  & a {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
  }
`;
