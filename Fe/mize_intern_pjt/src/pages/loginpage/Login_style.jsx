import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: ${Noto_Sans_KR.bold.weight};
  line-height: 1.7; /* 줄 간격 조정 */
  /* white-space: pre-line;  */

  span {
    display: block; /* 줄 바꿈 */
  }

  /* 아주 작은 화면일 때 줄바꿈 강제 */
  @media (max-width: 360px) {
    font-size: 2rem; /* 더 작은 글씨 */
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  margin: 20% 0%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Login = styled.input`
  width: 80%;
  height: 80%; // 안먹음
  padding: 10px 15px;
  border: 0px;
  border-radius: 5px;
  margin-bottom: 5%;
  background-color: #dae3ef;
`;

export const Button = styled.div``;
