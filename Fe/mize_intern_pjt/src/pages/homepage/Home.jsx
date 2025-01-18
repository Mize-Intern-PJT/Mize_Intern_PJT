import { useState, useEffect } from "react";
import * as Styled from "./Home_style";
import Filter from "./Filter/Filter";
import Devices from "./Devices/Devices";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [allDevices, setAllDevices] = useState([]); // 전체 디바이스
  const [filteredDevices, setFilteredDevices] = useState([]); // 필터링된 디바이스
  const [selectedFilter, setSelectedFilter] = useState({
    category: "Basic",
    room: "모든 기기",
  }); // 선택된 방 정보

  const title = "마이즈";

  // 카테고리와 방 이름 매핑
  const roomInfo = {
    Basic: ["모든 기기"], // 기본
    BjMAADSYeAEAAAteSQz__w: ["대회의실", "1번", "2번"], // 회의실(1번, 2번이 띄어쓰기로 되어있음 ㅠㅠ 1번 소회의실, 2번 소회의실)
    BjMAADSYeAEAAAwxNAz__w: [
      "김영훈대표",
      "김영철이사",
      "김혜진이사",
      "박인수본부장",
    ], // 임원실
    BjMAADSYeAEAAAwlEQz__w: [
      "집중실1",
      "집중실2",
      "스낵바",
      "서버실",
      "수면/샤워(남)",
      "수면/샤워(여)",
    ], // 공용 공간
  };

  const api = "http://localhost:3002/api";
  const apimobile = "http://192.168.0.21:3002/api";
  const apiproxy = "/api";

  // API 요청
  const fetchDevices = async () => {
    try {
      const response = await axios.get(apiproxy);
      const data = response.data;
      setAllDevices(data);
      setFilteredDevices(data);
    } catch (error) {
      console.error("Error fetching devices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  // // API 연결 전 테스트
  // useEffect(() => {
  //   setAllDevices(data);
  //   setFilteredDevices(data);
  //   setLoading(false);
  // }, []);

  // 필터
  const handleFilterChange = (category, room) => {
    if (category === "Basic") {
      // 필터 선택 해제(모든 데이터 표시)
      setFilteredDevices(allDevices);
      //test
      setSelectedFilter({ category: "Basic", room: "모든 기기" });
      return;
    } else {
      const filtered = allDevices.filter((device) => {
        const roomName = device.message.name.split(" ")[0]; // name에서 방 이름 추출(띄어쓰기 전까지지)
        return device.message.agt === category && roomName === room; // 선택된 방과 일치하는 데이터만 필터링
      });
      setFilteredDevices(filtered);
      setSelectedFilter({ category, room });
    }
    // setSelectedFilter({ category, room });
  };

  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Header>
      <Filter
        roomInfo={roomInfo}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      {/* 로딩 중일 때 로딩 표시 */}
      {loading ? <div>로딩중</div> : <Devices devices={filteredDevices} />}
      {/* <Devices devices={filteredDevices} /> */}
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
//   const [selectedFilter, setSelectedFilter] = useState({
//     roomCategory: "basic",
//     room: "기본",
//     roomList: data.basic.subCategories,
//   });

//   // const test = "conference1";
//   // console.log("서브룸리스트 잘 되나", data[test].subCategories);

//   // 필터에서 선택된 방 바꿀 때 함수
//   const handleFilterChange = (roomCategory, room) => {
//     setSelectedFilter({
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
//         selectedFilter={selectedFilter}
//         data={data}
//         onFilterChange={handleFilterChange}
//       />
//       <Devices selectedFilter={selectedFilter.room} />
//     </Styled.HomeWrapper>
//   );
// }
