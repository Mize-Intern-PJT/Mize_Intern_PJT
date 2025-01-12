import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

// PowerOccupancy와 동일
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
`;

export const Top = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  /* justify-content: space-between; */
  /* background-color: red; */
  padding: 7%;
`;

export const Icon = styled.img`
  width: 50%;
  /* height: 100%; */
  /* margisn-top: 2%; */
  object-fit: scale-down;
`;

export const IconText = styled.div`
  font-weight: ${Noto_Sans_KR.regular.weight};
  font-size: 0.7rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PlaceText = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.8rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const StateText = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.7rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const Bottom = styled.div`
  display: flex;
  /* height: 100%; */
  flex-grow: 1;
`;

export const Button = styled.div`
  /* width: 30%; */
  height: 60%;
  background-color: ${PALETTE.SUB_BLACK};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  /* width: 30%; */
  /* height: 60%; */
  align-items: center;
  /* justify-content: center; */
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding-left: 7%;
`;
