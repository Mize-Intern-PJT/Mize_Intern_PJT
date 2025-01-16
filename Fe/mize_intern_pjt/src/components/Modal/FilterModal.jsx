import React, { useState, useEffect } from "react";
import * as Styled from "./FilterModal_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function FilterModal({
  roomInfo,
  selectedFilter,
  onFilterChange,
  onClose,
}) {
  const [isClosing, setIsClosing] = useState(false); // 모달창 슬라이드 애니메이션
  const [selectedCategory, setSelectedCategory] = useState(
    selectedFilter.category || null
  ); // 현재 선택된 방 카테고리
  const [selectedRoom, setSelectedRoom] = useState(selectedFilter.room || null); // 현재 선택된 방

  const categoryLabels = {
    BjMAADSYeAEAAAteSQz__w: "회의실",
    BjMAADSYeAEAAAwxNAz__w: "임원실",
    BjMAADSYeAEAAAwlEQz__w: "공용 공간",
  };

  const handleModalClose = () => {
    setIsClosing(true); // 슬라이드 아웃 애니메이션 시작

    // 애니메이션이 완료되면 모달 제거(애니메이션 시간과 동일 0.3초초)
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // 하위 카테고리 선택 시 실행되는 함수
  // const handleSubRoomSelect = (subRoom, containSubRooms) => {
  //   // Filter.jsx로 선택된 카테고리 정보 전달(선택된 방, 선택된 하위 방, 선택된 방에 속한 하위 방들)
  //   onRoomSelect(selectedRoom, subRoom, containSubRooms);
  //   setSelectedSubRoom(subRoom);
  //   handleModalClose(); //  모달 닫기
  // };

  // // 카테고리 선택
  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  //   setSelectedRoom(roomInfo[category][0]); // 기본: 첫 번째 방 선택
  // };

  // // 방 선택
  // const handleRoomClick = (room) => {
  //   setSelectedRoom(room);
  //   onFilterChange(selectedCategory, selectedRoom); // 상태 변경 이벤트 전달 (비동기지만 순서대로 작동)
  //   onClose(); // 모달 닫기
  // };

  // 잘 안되면 아마 상태 변경 비동기인듯..그럼 전에 사용하던 방식으로 하자

  // 카테고리 선택
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // 방 선택
  const handleRoomClick = (room) => {
    const currentCategory = selectedCategory; // 현재 카테고리를 로컬 변수에 저장
    setSelectedRoom(room);
    onFilterChange(currentCategory, room); // 로컬 변수를 사용하여 전달(비동기 고려)
    onClose(); // 모달 닫기
  };
  console.log("선ㅌ택된 방", selectedCategory);

  return (
    <>
      {/* 모달 밖 영역 */}
      <Styled.BlurContainer onClick={handleModalClose} $isClosing={isClosing} />
      <Styled.Wrapper $isClosing={isClosing}>
        <Styled.Header>
          방 선택
          <FontAwesomeIcon icon={faX} onClick={onClose} />
        </Styled.Header>
        <Styled.RoomCategoryContainer>
          <Styled.RoomCategory>
            {/* 테스트 */}
            {/* 카테고리 선택 */}
            {Object.keys(roomInfo).map((category) => (
              <Styled.RoomName
                key={category}
                $isSelected={selectedCategory === category} // 현재 선택된 방인지 확인
                onClick={() => handleCategoryClick(category)} // 선택된 방 업데이트
              >
                {categoryLabels[category] || "기본"}
              </Styled.RoomName>
            ))}
          </Styled.RoomCategory>
          {/* 방 선택 */}
          <Styled.SubRoomCategory>
            {roomInfo[selectedCategory].map((room) => (
              <Styled.SubRoomName
                key={room}
                $isSelected={selectedRoom === room}
                onClick={() => handleRoomClick(room)} // 하위 방 선택
              >
                {room}
              </Styled.SubRoomName>
            ))}
          </Styled.SubRoomCategory>
        </Styled.RoomCategoryContainer>
      </Styled.Wrapper>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import * as Styled from "./FilterModal_style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faX } from "@fortawesome/free-solid-svg-icons";

// const ROOM_CATEGORIES = {
//   basic: {
//     name: "기본",
//     subCategories: ["기본"],
//   },
//   conference: {
//     name: "회의실",
//     subCategories: ["대회의실", "1번 소회의실", "2번 소회의실"],
//   },
//   conference1: {
//     name: "임원실",
//     subCategories: ["대표님", "이사님", "이사님2"],
//   },
//   conference2: {
//     name: "공용 공간",
//     subCategories: ["수면실", "휴게실", "서버실테스트테스트", "탕비실"],
//   },
// };

// // export default function FilterModal({
// //   onClose,
// //   onRoomSelect,
// //   initialSelection,
// // }) {
// //   const [isClosing, setIsClosing] = useState(false); // 모달창 슬라이드 애니메이션
// //   const [selectedRoom, setSelectedRoom] = useState(initialSelection.room); // 현재 선택된 방 카테고리
// //   const [selectedSubRoom, setSelectedSubRoom] = useState(
// //     initialSelection.subRoom
// //   ); // 현재 선택된 하위 방 카테고리(기본값 전달)

// //   console.log("initalSelection: ", initialSelection);

// //   const handleModalClose = () => {
// //     setIsClosing(true); // 슬라이드 아웃 애니메이션 시작

// //     // 애니메이션이 완료되면 모달 제거(애니메이션 시간과 동일 0.3초초)
// //     setTimeout(() => {
// //       onClose();
// //     }, 300);
// //   };

// //   // 하위 카테고리 선택 시 실행되는 함수
// //   const handleSubRoomSelect = (subRoom, containSubRooms) => {
// //     // Filter.jsx로 선택된 카테고리 정보 전달(선택된 방, 선택된 하위 방, 선택된 방에 속한 하위 방들)
// //     onRoomSelect(selectedRoom, subRoom, containSubRooms);
// //     setSelectedSubRoom(subRoom);
// //     handleModalClose(); //  모달 닫기
// //   };

// //   return (
// //     <>
// //       {/* 모달 밖 영역 */}
// //       <Styled.BlurContainer onClick={handleModalClose} $isClosing={isClosing} />
// //       <Styled.Wrapper $isClosing={isClosing}>
// //         <Styled.Header>
// //           방 선택
// //           <FontAwesomeIcon icon={faX} onClick={handleModalClose} />
// //         </Styled.Header>
// //         <Styled.RoomCategoryContainer>
// //           <Styled.RoomCategory>
// //             {/* Data에 맞게 목록 렌더링 다시 ~ */}
// //             {Object.entries(ROOM_CATEGORIES).map(([key, category]) => (
// //               <Styled.RoomName
// //                 key={key}
// //                 $isSelected={selectedRoom === key} // 현재 선택된 방인지 확인
// //                 onClick={() => setSelectedRoom(key)} // 선택된 방 업데이트
// //               >
// //                 {category.name}
// //               </Styled.RoomName>
// //             ))}
// //           </Styled.RoomCategory>
// //           {/* 하위 방 선택 */}
// //           <Styled.SubRoomCategory>
// //             {ROOM_CATEGORIES[selectedRoom].subCategories.map((subRoom) => (
// //               <Styled.SubRoomName
// //                 key={subRoom}
// //                 $isSelected={selectedSubRoom === subRoom}
// //                 onClick={() =>
// //                   handleSubRoomSelect(
// //                     subRoom,
// //                     ROOM_CATEGORIES[selectedRoom].subCategories // 속한 하위 방들
// //                   )
// //                 } // 하위 방 선택
// //               >
// //                 {subRoom}
// //               </Styled.SubRoomName>
// //             ))}
// //           </Styled.SubRoomCategory>
// //         </Styled.RoomCategoryContainer>
// //       </Styled.Wrapper>
// //     </>
// //   );
// // }
// export default function FilterModal({
//   data,
//   selectedRoom,
//   onFilterChange,
//   onClose,
// }) {
//   const [isClosing, setIsClosing] = useState(false); // 모달창 슬라이드 애니메이션
//   // const [selectedRoom, setSelectedRoom] = useState(initialSelection.room); // 현재 선택된 방 카테고리
//   // const [selectedSubRoom, setSelectedSubRoom] = useState(
//   //   initialSelection.subRoom
//   // ); // 현재 선택된 하위 방 카테고리(기본값 전달)

//   const handleModalClose = () => {
//     setIsClosing(true); // 슬라이드 아웃 애니메이션 시작

//     // 애니메이션이 완료되면 모달 제거(애니메이션 시간과 동일 0.3초초)
//     setTimeout(() => {
//       onClose();
//     }, 300);
//   };

//   // 하위 카테고리 선택 시 실행되는 함수
//   // const handleSubRoomSelect = (subRoom, containSubRooms) => {
//   //   // Filter.jsx로 선택된 카테고리 정보 전달(선택된 방, 선택된 하위 방, 선택된 방에 속한 하위 방들)
//   //   onRoomSelect(selectedRoom, subRoom, containSubRooms);
//   //   setSelectedSubRoom(subRoom);
//   //   handleModalClose(); //  모달 닫기
//   // };

//   // gpt 방 선택 함수
//   const handleRoomClick = (category) => {
//     const rooms = data[category]?.subCategories || [];
//     const firstRoom = rooms[0] || ""; // 첫 번째 하위 방 선택
//     onFilterChange(category, firstRoom); // 상태 변경 이벤트 전달
//   };

//   // gpt 하위 방 선택 함수
//   const handleSubRoomClick = (room) => {
//     onFilterChange(selectedRoom.category, room); // 하위 방 선택 처리
//     // 모달 닫기
//     handleModalClose();
//   };

//   console.log("선ㅌ택된 방", selectedRoom);

//   return (
//     <>
//       {/* 모달 밖 영역 */}
//       <Styled.BlurContainer onClick={handleModalClose} $isClosing={isClosing} />
//       <Styled.Wrapper $isClosing={isClosing}>
//         <Styled.Header>
//           방 선택
//           <FontAwesomeIcon icon={faX} onClick={onClose} />
//         </Styled.Header>
//         <Styled.RoomCategoryContainer>
//           <Styled.RoomCategory>
//             {/* Data에 맞게 목록 렌더링 다시 ~ */}
//             {Object.entries(data).map(([key, category]) => (
//               <Styled.RoomName
//                 key={key}
//                 $isSelected={selectedRoom.category === key} // 현재 선택된 방인지 확인
//                 onClick={() => handleRoomClick(key)} // 선택된 방 업데이트
//               >
//                 {category.name}
//               </Styled.RoomName>
//             ))}
//           </Styled.RoomCategory>
//           {/* 하위 방 선택 */}
//           <Styled.SubRoomCategory>
//             {selectedRoom.roomList.map((room) => (
//               <Styled.SubRoomName
//                 key={room}
//                 $isSelected={selectedRoom.room === room}
//                 onClick={() => handleSubRoomClick(room)} // 하위 방 선택
//               >
//                 {room}
//               </Styled.SubRoomName>
//             ))}
//           </Styled.SubRoomCategory>
//         </Styled.RoomCategoryContainer>
//       </Styled.Wrapper>
//     </>
//   );
// }
