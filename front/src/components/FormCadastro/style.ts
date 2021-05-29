import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  form {
    display: grid;
    width: 90%;
  }

  input {
    -webkit-appearance: none;
    width: 300px;
    border: 0;
    font-family: inherit;
    padding: 0;
    height: 60px;
    font-size: 16px;
    font-weight: 500;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
  }
`;
