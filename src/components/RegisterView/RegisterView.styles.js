import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const FormContent = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 2px 3px 4px #bfbfbf;
`;

export const formCss = css`
  display: flex;
  flex-direction: column;
`;

export const errorCss = css`
  margin: 0;
  color: red;
`;

export const inputCss = css`
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 5px 0;
`;

export const buttonCss = css`
  height: 30px;
  margin-top: 12px;
  border: none;
  border-radius: 5px;
  background-color: #6e90ef;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #7687b7;
  }
`;

export const titleCss = css`
  text-align: center;
`;