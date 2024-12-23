import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
