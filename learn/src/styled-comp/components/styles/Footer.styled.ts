import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  p{
    text-align: right;
    margin-bottom: 0;
    padding-bottom: 20px
  }
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  > div, > ul {
    flex: 1
  }
  li {
    list-style: none;
    padding: 10px;
  }
  
`