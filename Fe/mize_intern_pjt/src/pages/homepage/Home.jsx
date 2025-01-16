import { useState, useEffect } from "react";
import * as Styled from "./Home_style";
import Filter from "./Filter/Filter";
import Devices from "./Devices/Devices";
import {
  RoomCategory,
  SubRoomCategory,
} from "../../components/Modal/FilterModal_style";
import data from "./data";

export default function Home() {
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [allDevices, setAllDevices] = useState([]); // 전체 디바이스
  const [filteredDevices, setFilteredDevices] = useState([]); // 필터링된 디바이스
  const [selectedRoom, setSelectedRoom] = useState({
    category: null,
    room: null,
  }); // 선택된 방 정보

  const title = "마이즈";
  const api = "http://localhost:3001/api";

  // API 요청
  useEffect(() => {
    async function fetchDevices() {
      try {
        const response = await fetch(api);
        const data = await response.json();

        // 모든 장치 데이터 설정
        setAllDevices(data);
        setFilteredDevices(data); // 초기 상태에서는 모든 데이터 표시
      } catch (error) {
        console.error("Error fetching devices:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDevices();
  }, []);

  // 필터
  const handleFilterChange = (category, room) => {
    if (!category && !room) {
      setFilteredDevices(allDevices);
      return;
    } else {
      const filtered = allDevices.filter((device) => {
        const roomName = device.message.name.split(" ")[0];
        return; // name에서 방 이름 추출(띄어쓰기 전까지지)
      });
      setFilteredDevices(filtered);
    }
    // setSelectedRoom({
    //   roomCategory,
    //   room,
    //   roomList: data[roomCategory]?.subCategories || [],
    // });
  };

  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Header>
      <Filter
        selectedRoom={selectedRoom}
        data={data}
        onFilterChange={handleFilterChange}
      />
      <Devices selectedRoom={selectedRoom.room} />
    </Styled.HomeWrapper>
  );
}

// import * as Styled from "./Home_style";
// import Filter from "./Filter/Filter";
// import Devices from "./Devices/Devices";
// import { useState } from "react";
// import {
//   RoomCategory,
//   SubRoomCategory,
// } from "../../components/Modal/FilterModal_style";
// import data from "./data";

// const roominfo = {
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

// export default function Home() {
//   const title = "마이즈";
//   // 초기 방 정보
//   const initialRoom = "기본";
//   // 선택된 방 정보
//   const [selectedRoom, setSelectedRoom] = useState({
//     roomCategory: "basic",
//     room: "기본",
//     roomList: data.basic.subCategories,
//   });

//   // const test = "conference1";
//   // console.log("서브룸리스트 잘 되나", data[test].subCategories);

//   // 필터에서 선택된 방 바꿀 때 함수
//   const handleFilterChange = (roomCategory, room) => {
//     setSelectedRoom({
//       roomCategory,
//       room,
//       roomList: data[roomCategory]?.subCategories || [],
//     });
//   };

//   return (
//     <Styled.HomeWrapper>
//       <Styled.Header>
//         <Styled.Title>{title}</Styled.Title>
//       </Styled.Header>
//       <Filter
//         selectedRoom={selectedRoom}
//         data={data}
//         onFilterChange={handleFilterChange}
//       />
//       <Devices selectedRoom={selectedRoom.room} />
//     </Styled.HomeWrapper>
//   );
// }
