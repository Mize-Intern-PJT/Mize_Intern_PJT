import { useState } from "react";
import * as Styled from "./Filter_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PALETTE } from "@/styles/colors";
import FilterModal from "../../../components/Modal/FilterModal";

export default function Filter() {
  // 모달 열 수 있는 메뉴바
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 선택된 방 상태 관리
  const [selectedRoom, setSelectedRoom] = useState({
    room: "",
    subRoom: "",
    containSubRooms: [],
  });

  // 모달 열리는 함수
  const onMenuClick = () => {
    setIsModalOpen(true);
  };

  // FilterModal에서 방이 선택됐을 때 실행될 함수
  const handleRoomSelect = (room, subRoom, containSubRooms) => {
    setSelectedRoom({
      room,
      subRoom,
      containSubRooms,
    });
    // setTimeout(() => {
    //   setIsModalOpen(false); // 선택 완료 후 모달 닫기 (**1초 후 닫을까?)
    // }, 500);
    setTimeout(() => {
      console.log(room, subRoom);
      console.log(selectedRoom);
    }, 2000);
  };

  return (
    <Styled.Wrapper>
      {/* color 적용 되고있나 */}
      <Styled.SubRoomList>
        {/* {selectedRoom.room &&
          ROOM_CATEGORIES[selectedRoom.room]?.subCategories.map((subRoom) => (
            <Styled.SubRoomItem
              key={subRoom}
              isSelected={selectedRoom.subRoom === subRoom} // 선택된 subRoom 강조
            >
              {subRoom}
            </Styled.SubRoomItem>
          ))} */}
        {selectedRoom.containSubRooms &&
          selectedRoom.containSubRooms.map((subroom) => (
            <Styled.SubRoomItem
              key={subroom}
              $isSelected={selectedRoom.subRoom === subroom} // 선택된 하위 방 표시
            >
              {subroom}
            </Styled.SubRoomItem>
          ))}
      </Styled.SubRoomList>
      <FontAwesomeIcon
        onClick={onMenuClick}
        icon={faBars}
        color={PALETTE.MAIN_BLACK}
      />
      {/* FilterModal컴포넌트에 onClose props 전달 */}
      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          onRoomSelect={handleRoomSelect}
        />
      )}
    </Styled.Wrapper>
  );
}
