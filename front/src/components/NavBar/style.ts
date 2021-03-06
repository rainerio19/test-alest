import styled from "styled-components";

export const NavBarContent = styled.nav`
  background: #06557e;
  display: flex;

  img {
    height: 200px;
    width: auto;
  }

  .links-content {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      background: #fff;
      padding: 12px;
      border-radius: 12px;
      color: #06557e;
      text-transform: uppercase;
      font-weight: bold;
      transition: 0.3s;

      &:hover {
        background: #e2e2ee;
      }
    }
  }
`;
