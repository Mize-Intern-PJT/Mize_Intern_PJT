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
  background-color: ${({ $isOn }) =>
    $isOn ? PALETTE.MAIN_BLUE : PALETTE.SUB_BLACK};
  border-radius: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
