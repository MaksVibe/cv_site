import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  background: linear-gradient(
    0deg,
    rgba(1, 10, 0, 0) 0%,
    rgba(1, 10, 0, 0.9) 40%,
    rgba(1, 10, 0, 1) 80%
  );
`;

export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;
