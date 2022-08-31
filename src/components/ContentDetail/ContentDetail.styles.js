import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Content = styled.div`
  margin: 15px;
`;

export const titleCss = css`
  color: white;
`;

export const VideoContent = styled.div`
  display: flex;
  margin-top: 70px;
  @media (max-width: 768px) {
    flex-direction: column;
  }  
`;

export const videoCss = css`
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 300px;
  } 
`;

export const TextContent = styled.div`
  background-color: #787878b0;
  color: white;
  padding: 12px;
  margin: 0 30px;
  width: 80%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: fit-content;
    margin: 30px 0;
  } 
`;