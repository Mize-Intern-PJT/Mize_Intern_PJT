import { useEffect, useState } from "react";
import * as Styled from "./Devices_style";
import PlugPresenceCard from "../../../components/PlugPresenceCard/PlugPresenceCard";
import PolarSPOTMiniCard from "../../../components/PolarSPOTMiniCard/PolarSPOTMiniCard";
import EnvironmentalSensorCard from "../../../components/environmentalSensorCard/environmentalSensorCard";
import { mockData } from "./test";

export default function Devices() {
  const [loading, setLoading] = useState(false);
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

  // 로딩상태?
  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <Styled.Wrapper>
      <PlugPresenceCard type="occupancy" place="대회의실" initialstate={true} />
      <PlugPresenceCard type="power" place="대회의실" initialstate={false} />
      <PolarSPOTMiniCard
        deviceType="remote"
        roomId={1}
        status={false}
        controls={[
          { controlId: 1, name: "TV", status: true },
          { controlId: 2, name: "에어컨", status: false },
        ]}
      ></PolarSPOTMiniCard>
      <PolarSPOTMiniCard
        deviceType="light"
        roomId={1}
        status={true}
        switches={[
          { switchId: 1, name: "스위치1", status: true },
          { switchId: 2, name: "스위치2", status: false },
        ]}
      ></PolarSPOTMiniCard>
      <EnvironmentalSensorCard></EnvironmentalSensorCard>

      {/* API 받아온 내용에서 map으로 돌아가면서 렌더링 */}
      {/* {mockData.map((room, roomidx) => {
        
      })} */}
    </Styled.Wrapper>
  );
}
