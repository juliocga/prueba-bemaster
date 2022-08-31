import styled from "styled-components";
import { css } from "@emotion/css";

export const HeaderCss =styled.div`
    background-color: #0000003b;
    width: 100%;
    height: 50px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

export const MenuItems =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        display: ${props => props.open ? "flex" : "none"};
    }
`;

export const LogContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

export const itemCss = css`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 8px;
`;

export const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;