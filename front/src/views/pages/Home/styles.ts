import styled from "styled-components";

export const SectionComponent = styled.section`
  height: 100vh;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }

  img {
    width: 100%;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 70%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
  }

  input#search-bar {
    margin: 0 auto;
    width: 100%;
    height: 45px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #d0cfce;
    outline: none;
    &:focus {
      border: 1px solid #000000;
      transition: 0.35s ease;
      color: #000000;
      &::-webkit-input-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
  }
`;
