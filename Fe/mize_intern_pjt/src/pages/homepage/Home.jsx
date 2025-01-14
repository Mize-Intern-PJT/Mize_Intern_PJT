import * as Styled from "./Home_style";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import PlugPresenceCard from "../../components/PlugPresenceCard/PlugPresenceCard";
import PolarSPOTMiniCard from "../../components/PolarSPOTMiniCard/PolarSPOTMiniCard";
import EnvironmentalSensorCard from "../../components/environmentalSensorCard/environmentalSensorCard";
import Devices from "./devices/Devices";
import { useState } from "react";
import {
  RoomCategory,
  SubRoomCategory,
} from "../../components/Modal/FilterModal_style";

// Home에서 선택된 방 관리
// Filter와 FilterModal에 상태 전달

// 연결된 iot 기기들을 불러오는 API 요청 (mount시에만)
// useEffect(() => {
//   async function fetchDevices() {
//     try {
//       const response = await fetch("API");
//       const data = await response.json();
//     } catch (error) {
//       console.error("Error 메시지: ", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchDevices();
// }, []);

const data = {
  basic: {
    name: "기본",
    subCategories: ["기본"],
  },
  conference: {
    name: "회의실",
    subCategories: ["대회의실", "1번 소회의실", "2번 소회의실"],
  },
  conference1: {
    name: "임원실",
    subCategories: ["대표님", "이사님", "이사님2"],
  },
  conference2: {
    name: "공용 공간",
    subCategories: ["수면실", "휴게실", "서버실테스트테스트", "탕비실"],
  },
};

export default function Home() {
  window.history.forward();
  const title = "마이즈";
  // 초기 방 정보
  const initialRoom = "기본";
  // 선택된 방 정보
  const [selectedRoom, setSelectedRoom] = useState({
    roomCategory: "basic",
    room: "기본",
    roomList: data.basic.subCategories,
  });

  // const test = "conference1";
  // console.log("서브룸리스트 잘 되나", data[test].subCategories);

  // 필터에서 선택된 방 바꿀 때 함수
  const handleFilterChange = (roomCategory, room) => {
    setSelectedRoom({
      roomCategory,
      room,
      roomList: data[roomCategory]?.subCategories || [],
    });
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
