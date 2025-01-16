import { useState } from "react";
import * as Styled from "./Filter_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PALETTE } from "@/styles/colors";
import FilterModal from "../../../components/Modal/FilterModal";

export default function Filter({ selectedFilter, roomInfo, onFilterChange }) {
  // 모달 열 수 있는 메뉴바
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열리는 함수
  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  // 다른 하위 방 클릭시 실행될 함수(selected 바꾸기)
  const handleRoomClick = (room) => {
    onFilterChange(selectedFilter.category, room);
  };

  console.log("Filter 컴포넌트 category", selectedFilter.category);

  return (
    <Styled.Wrapper>
      <Styled.SubRoomList>
        {roomInfo[selectedFilter.category].map((room) => {
          // // 1번 소회의실, 2번 소회의실 이름 변경
          // const displayName =
          //   selectedFilter.category === "BjMAADSYeAEAAAteSQz__w" // 회의실 카테고리인지 확인
          //     ? room === "1번"
          //       ? "1번 소회의실"
          //       : room === "2번"
          //       ? "2번 소회의실"
          //       : room // 기본 이름 유지
          //     : room; // 다른 카테고리는 이름 그대로 사용
          return (
            <Styled.SubRoomItem
              key={room}
              $isSelected={selectedFilter.room === room} // 선택된 하위 방 표시
              onClick={() => handleRoomClick(room)}
            >
              {/* {displayName} */}
              {room}
            </Styled.SubRoomItem>
          );
        })}
      </Styled.SubRoomList>
      <FontAwesomeIcon
        onClick={onOpenModal}
        icon={faBars}
        color={PALETTE.MAIN_BLACK}
        size="sm"
      />

      {/* FilterModal컴포넌트에 onClose props 전달 */}
      {isModalOpen && (
        <FilterModal
          roomInfo={roomInfo}
          selectedFilter={selectedFilter}
          onFilterChange={onFilterChange}
          onClose={onCloseModal}
        />
      )}
    </Styled.Wrapper>
  );
}

// import { useState } from "react";
// import * as Styled from "./Filter_style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { PALETTE } from "@/styles/colors";
// import FilterModal from "../../../components/Modal/FilterModal";

// export default function Filter({ selectedFilter, data, onFilterChange }) {
//   // 모달 열 수 있는 메뉴바
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // 선택된 방 상태 관리
//   // const [selectedFilter, setSelectedRoom] = useState({
//   //   room: "basic",
//   //   subRoom: "기본",
//   //   containSubRooms: ["기본"],
//   // });

//   // 모달 열리는 함수
//   const onMenuClick = () => {
//     setIsModalOpen(true);
//   };

//   // FilterModal에서 방이 선택됐을 때 실행될 함수
//   // const handleRoomSelect = (room, subRoom, containSubRooms) => {
//   //   setSelectedRoom({
//   //     room,
//   //     subRoom,
//   //     containSubRooms,
//   //   });
//   //   // setTimeout(() => {
//   //   //   setIsModalOpen(false); // 선택 완료 후 모달 닫기 (**1초 후 닫을까?)
//   //   // }, 500);
//   //   setTimeout(() => {
//   //     console.log(room, subRoom);
//   //     console.log(selectedFilter);
//   //   }, 2000);
//   // };

//   // 다른 하위 방 클릭시 실행될 함수
//   // const handleSubRoomClick = (subRoom) => {
//   //   setSelectedRoom({
//   //     ...selectedFilter,
//   //     subRoom,
//   //   });
//   //   // 필터 바뀌는 함수 실행
//   // };

//   // 다른 하위 방 클릭시 실행될 함수(selected 바꾸기)
//   const handleSubRoomClick = (room) => {
//     onFilterChange(selectedFilter.roomCategory, room);
//   };

//   return (
//     // <Styled.Wrapper>
//     //   <Styled.SubRoomList>
//     //     {selectedFilter.containSubRooms &&
//     //       selectedFilter.containSubRooms.map((subroom) => (
//     //         <Styled.SubRoomItem
//     //           key={subroom}
//     //           $isSelected={selectedFilter.subRoom === subroom} // 선택된 하위 방 표시
//     //         >
//     //           {subroom}
//     //         </Styled.SubRoomItem>
//     //       ))}
//     //   </Styled.SubRoomList>
//     //   <FontAwesomeIcon
//     //     onClick={onMenuClick}
//     //     icon={faBars}
//     //     color={PALETTE.MAIN_BLACK}
//     //   />
//     //   {/* FilterModal컴포넌트에 onClose props 전달 */}
//     //   {isModalOpen && (
//     //     <FilterModal
//     //       onClose={() => setIsModalOpen(false)}
//     //       onRoomSelect={handleRoomSelect}
//     //       // 선택된 방 modal에 전달
//     //       initialSelection={selectedFilter}
//     //     />
//     //   )}
//     // </Styled.Wrapper>
//     <Styled.Wrapper>
//       <Styled.SubRoomList>
//         {selectedFilter.roomList &&
//           selectedFilter.roomList.map((room) => (
//             <Styled.SubRoomItem
//               key={room}
//               $isSelected={selectedFilter.room === room} // 선택된 하위 방 표시
//               onClick={() => handleSubRoomClick(room)}
//             >
//               {room}
//             </Styled.SubRoomItem>
//           ))}
//       </Styled.SubRoomList>
//       <FontAwesomeIcon
//         onClick={onMenuClick}
//         icon={faBars}
//         color={PALETTE.MAIN_BLACK}
//         size="sm"
//       />

//       {/* FilterModal컴포넌트에 onClose props 전달 */}
//       {isModalOpen && (
//         <FilterModal
//           data={data}
//           selectedFilter={selectedFilter}
//           onFilterChange={onFilterChange}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </Styled.Wrapper>
//   );
// }
