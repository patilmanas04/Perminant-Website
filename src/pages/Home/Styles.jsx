import styled from "styled-components";

export const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    "navbar navbar"
    "main sidebar"
    "footer sidebar";

  @media (max-width: 950px) {
    grid-template-columns: 1fr 280px;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;
