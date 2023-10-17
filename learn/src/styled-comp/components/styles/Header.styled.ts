import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme?.colors?.header};
  padding: 20px 0;
`;

export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
`;
