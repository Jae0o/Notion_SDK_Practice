import styled from "styled-components";

export const ContentLayout = styled.section`
  width: 46%;
  height: 90%;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  box-shadow: 0rem 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
`;
