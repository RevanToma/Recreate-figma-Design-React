import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;

  @media (max-width: 775px) {
    flex-direction: column;
    margin-top: 28px;
  }
`;
