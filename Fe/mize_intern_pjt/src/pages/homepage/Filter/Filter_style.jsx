import styled from "styled-components";
import { Noto_Sans_KR } from "@/styles/fonts";
import { PALETTE } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  margin: 5% 0%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; // 메뉴바 위치를 우측 상단에 고정, 다른 요소들보다 위에 보이도록 z-index 설정 */
`;

export const SubRoomList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto; // 가로 스크롤 활성화
  -ms-overflow-style: none; // 스크롤 바 없애기 IE and Edge
  scrollbar-width: none; // Firefox
  width: calc(100% - 60px); // 메뉴바 공간 제외

  &::-webkit-scrollbar {
    display: none; // Chrome , Safari , Opera
  }
`;

export const SubRoomItem = styled.div`
  padding: 10px 15px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? PALETTE.LIGHT_BLACK : null};
  /* color: ${({ $isSelected }) =>
    $isSelected ? "white" : PALETTE.MAIN_BLACK}; */
  border-radius: 16px;
  flex-shrink: 0;
  /* transition: background-color 0.3s, color 0.3s; */
  font-weight: ${Noto_Sans_KR.medium.weight};
  font-size: 0.85rem;
`;

// 오른쪽에 position 고정
export const Menubar = styled.div`
  display: flex;
  position: sticky;
  right: 0;
`;
