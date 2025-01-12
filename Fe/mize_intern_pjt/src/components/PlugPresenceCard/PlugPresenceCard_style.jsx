import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  width: 45%;
  /* height: ; */
  aspect-ratio: 1 / 0.95;
  background-color: ${PALETTE.LIGHT_BLACK};
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px #eeeeee;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* padding: 0px 0px 5% 3%; */
  padding: 0px 0px 13px 13px;
  gap: 10%;
`;

export const Top = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  /* margisn-top: 2%; */
`;

export const Button = styled.div`
  width: 70px;
  height: 100%;
  background-color: ${({ type, $isActive }) => {
    if (type === "power" && $isActive) return PALETTE.MAIN_BLUE;
    if (type === "occupancy" && $isActive) return PALETTE.MAIN_YELLOW;
    return PALETTE.SUB_BLACK;
  }};
  border-radius: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
