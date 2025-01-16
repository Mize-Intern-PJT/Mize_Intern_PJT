import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

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

export const Button = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // transient props ($) React node나 DOM 요소에 prop이 반영되지 않도록
  background-color: ${({ $isOn }) =>
    $isOn ? PALETTE.MAIN_BLUE : PALETTE.SUB_BLACK};
`;

export const ButtonContainer = styled.div`
  width: 35%;
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
