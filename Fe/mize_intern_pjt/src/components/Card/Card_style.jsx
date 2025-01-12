import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  width: 48%;
  aspect-ratio: 1 / 0.95;
  background-color: ${PALETTE.LIGHT_BLACK};
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px #eeeeee;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 0px 13px 13px; // %로 수정?
  gap: 10%;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  height: 55%;
  /* display: flex;
  align-items: center; */
  /* justify-content: center; */
  /* background-color: rgb(163, 102, 102); */
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 7%;
  /* background-color: #dbdbdb; */
`;

export const InfoText = styled.div`
  display: flex;
  gap: 3%;
`;

export const PlaceText = styled.div`
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 0.85rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const TypeText = styled.div`
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 0.85rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const DetailText = styled.div`
  display: flex;
`;

export const StateText = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.75rem;
  color: ${PALETTE.MAIN_BLACK};
`;
