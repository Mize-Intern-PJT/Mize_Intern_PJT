import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  width: 45%;
  aspect-ratio: 1 / 0.95;
  background-color: ${PALETTE.LIGHT_BLACK};
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px #eeeeee;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 13px 13px 13px 13px; // %로 수정?
  gap: 10%;
  margin-bottom: 50px;
`;

export const Top = styled.div`
  height: 55%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  background-color: #f3c8c8;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 7%;
  /* background-color: #bcbcc3; */
`;

export const PlaceText = styled.div`
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 0.8rem;
  color: ${PALETTE.MAIN_BLACK};
  /* text-overflow: ellipsis; */
`;

export const StateText = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.7rem;
  color: ${PALETTE.MAIN_BLACK};
`;
