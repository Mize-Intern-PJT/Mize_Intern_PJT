import { useState } from "react";
import * as Styled from "./Filter_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PALETTE } from "@/styles/colors";
import FilterModal from "../../../components/Modal/FilterModal";

export default function Filter() {
  // 모달 열 수 있는 메뉴바
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onMenuClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Styled.Wrapper>
      {/* color 적용 되고있나 */}
      <FontAwesomeIcon
        onClick={onMenuClick}
        icon={faBars}
        color={PALETTE.MAIN_BLACK}
      />
      {/* FilterModal컴포넌트에 onClose props 전달 */}
      {isModalOpen && <FilterModal onClose={() => setIsModalOpen(false)} />}
    </Styled.Wrapper>
  );
}
