import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 25% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: ${Noto_Sans_KR.bold.weight};
  color: ${PALETTE.MAIN_BLACK};
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
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  width: 80%;
  height: 2.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-bottom: 5%;
  background-color: ${PALETTE.SUB_BLUE};
  border-radius: 5px;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const LoginText = styled.input`
  /* position: absolute; */
  width: 90%;
  height: 70%;
  padding: 10px 7px;
  border: 2px solid ${PALETTE.SUB_BLUE};
  border-radius: 5px;
  /* margin-bottom: 5%; */
  background-color: ${PALETTE.SUB_BLUE};
  font-weight: ${Noto_Sans_KR.regular.weight};

  &::placeholder {
    color: ${PALETTE.MIDDLE_BLACK};
    font-weight: ${Noto_Sans_KR.regular.weight};
    font-size: 0.85rem;
  }

  &:focus {
    /* outline: 2px solid #d8d6d6; */
    outline: none;
    /* border-color: #b0caec; */
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 3%;
  font-size: 0.85rem;
  font-weight: ${Noto_Sans_KR.regular.weight};
  color: red;
`;

export const LoginButton = styled.div`
  width: 80%;
  height: 2.5vh;
  padding: 10px 10px;
  margin-top: 10%;
  background-color: ${PALETTE.MAIN_BLUE};
  border-radius: 5px;
  /* text-align: center; */
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 0.9rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
