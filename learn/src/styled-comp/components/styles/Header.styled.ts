import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme?.colors?.header};
`;
export const Logo = styled.img``;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
