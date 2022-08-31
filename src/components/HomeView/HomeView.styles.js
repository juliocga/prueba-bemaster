import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Button = styled.div`
  border: 1px solid #bcbcbf;
  border-radius: 5px;
  padding: 15px;
  background-color: #f7f7f7;
  margin: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const imageCss = css`
  border-radius: 5px;
`;

export const categoryCss = css`
  font-size: 18px;
  font-family: system-ui;
  margin: 6px;
  font-weight: 600;
`;

export const titleCss = css`
  color: white;
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 15px;
`;
