import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const HomeWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh; // 일단 보류
  padding: 7% 7%;
`;

export const Header = styled.div``;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: ${Noto_Sans_KR.bold.weight};
  color: ${PALETTE.MAIN_BLACK};
`;
