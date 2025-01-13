import styled from "styled-components";
import { Noto_Sans_KR } from "../../styles/fonts";
import { PALETTE } from "../../styles/colors";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100vw; // 화면 너비를 초과하지 않도록
  height: 30vh;
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 2; // 회색 배경 화면 위
  display: flex;
  flex-direction: column;
  gap: 5%;

  // 슬라이드 애니메이션
  animation: ${({ $isClosing }) => {
    $isClosing
      ? "slideOut 0.3s ease-in-out forwards"
      : "slideUp 0.3s ease-in-out forwards";
  }};

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

export const BlurContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  /* backdrop-filter: blur(0.5px); */
  z-index: 1;
  // 자연스럽게 블러 사라짐
  opacity: ${({ $isClosing }) => {
    $isClosing ? 0 : 1;
  }};
  transition: opacity 0.3s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${Noto_Sans_KR.semiBold.weight};
  font-size: 1rem;
  color: ${PALETTE.MAIN_BLACK};
`;

export const RoomCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px); /* Wrapper 패딩 고려 */
  box-sizing: border-box;
  /* padding: 1% 0%; */
`;

export const RoomCategory = styled.div`
  background-color: ${PALETTE.SUB_BLACK};
  width: 100%;
  height: 20%;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
  display: flex;
  padding: 0% 5%;
  align-items: center;
  justify-content: space-around;
`;

export const RoomName = styled.div`
  font-weight: ${({ $isSelected }) => {
    $isSelected ? Noto_Sans_KR.bold.weight : Noto_Sans_KR.regular.weight;
  }};
  font-size: 0.85rem;
  color: ${PALETTE.MAIN_BLACK};
  padding: 1% 2%;
  border-radius: 5px;
  /* 할까 말까 */
  /* background-color: ${(props) => (props.isSelected ? "white" : null)}; */
`;

export const SubRoomCategory = styled.div`
  background-color: ${PALETTE.LIGHT_BLACK};
  width: 100%;
  height: 80%;
  border-radius: 0px 0px 16px 16px;
  box-sizing: border-box;
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
`;

export const SubRoomName = styled.div`
  /* font-weight: ${($isSelected) =>
    $isSelected ? Noto_Sans_KR.bold.weight : Noto_Sans_KR.regular.weight}; */
  font-size: 0.85rem;
  color: ${PALETTE.MAIN_BLACK};
  padding: 1% 2%;
  border-radius: 5px;
  /* 할까 말까 */
  /* background-color: ${($isSelected) => ($isSelected ? "white" : null)}; */
`;
