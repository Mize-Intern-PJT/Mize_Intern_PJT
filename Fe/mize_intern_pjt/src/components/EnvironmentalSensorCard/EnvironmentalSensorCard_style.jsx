import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  width: 48%;
  aspect-ratio: 1 / 0.95;
  background: linear-gradient(${PALETTE.GRADATION_1}, ${PALETTE.GRADATION_2});
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 13px;
  gap: 20%;
  margin-bottom: 5%;
  /* justify-content: space-between; */
`;

export const Top = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const DegreeInfo = styled.div`
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 1.7rem;
`;

export const SubInfos = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 1rem;
  display: flex;
  gap: 15%;
`;

export const SubInfo = styled.div``;

export const Unit = styled.span`
  box-sizing: border-box;
  margin-left: 10%;
  font-size: 0.7rem;
`;

export const PlaceText = styled.div`
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.8rem;
  color: white;
`;
