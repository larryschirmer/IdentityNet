import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 16px 39px -9px rgba(170, 170, 170, 1);

  width: 30rem;
  height: 30rem;
  margin: 10rem auto 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    width: 13rem;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  .input,
  .output {
    font-size: 1.5rem;
  }
`;
