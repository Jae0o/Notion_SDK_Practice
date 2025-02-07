import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => theme.colors.main};
`;
