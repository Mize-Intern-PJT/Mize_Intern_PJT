import { useEffect, useState } from "react";
import * as Styled from "./Devices_style";
import PlugCard from "../../../components/PlugCard/PlugCard";
import PresenceSensorCard from "../../../components/PresenceSensorCard/PresenceSensorCard";
import PolarCard from "../../../components/PolarCard/PolarCard";
import SPOTMiniCard from "../../../components/SPOTMiniCard/SPOTMiniCard";
import EnvironmentalSensorCard from "../../../components/EnvironmentalSensorCard/EnvironmentalSensorCard";

export default function Devices({ devices }) {
  // 컴포넌트 매칭
  const componentInfo = {
    SL_SC_BE: EnvironmentalSensorCard,
    "ZG#TS06012": PresenceSensorCard,
    SL_OE_DE: PlugCard,
    SL_SW_ND1: PolarCard,
    SL_SW_ND2: PolarCard,
    SL_P_IR: SPOTMiniCard,
  };

  return (
    <Styled.Wrapper>
      {/* devices 돌면서 렌더링 */}
      {devices.map((device, deviceidx) => {
        // device.type에 따라 다른 컴포넌트 렌더링
        const Component = componentInfo[device.message.devtype];

        return (
          <Component
            key={deviceidx}
            name={device.message.name}
            agt={device.message.agt}
            data={device.message.data}
          />
        );
      })}
    </Styled.Wrapper>
  );
}

// import { useEffect, useState } from "react";
// import * as Styled from "./Devices_style";
// import PlugPresenceCard from "../../../components/PlugPresenceCard/PlugPresenceCard";
// import PolarSPOTMiniCard from "../../../components/PolarSPOTMiniCard/PolarSPOTMiniCard";
// import EnvironmentalSensorCard from "../../../components/EnvironmentalSensorCard/EnvironmentalSensorCard";
// import { mockData } from "./test";

// export default function Devices({ selectedRoom }) {
//   const [loading, setLoading] = useState(false);
//   const [devices, setDevices] = useState([]); // 필터된 devices들

//   // 필터링 (selectedRoom subroom이 바뀔때마다)
//   useEffect(() => {
//     const filteredDevices = mockData.filter(
//       (device) => device.room === selectedRoom
//     );
//     setDevices(filteredDevices);
//   }, [selectedRoom]);

//   // 로딩상태
//   if (loading) {
//     return <div>로딩중</div>;
//   }

//   return (
//     <Styled.Wrapper>
//       <PlugPresenceCard type="occupancy" place="대회의실" initialstate={true} />
//       <PlugPresenceCard type="power" place="대회의실" initialstate={false} />
//       <PolarSPOTMiniCard
//         deviceType="remote"
//         roomId={1}
//         status={false}
//         controls={[
//           { controlId: 1, name: "TV", status: true },
//           { controlId: 2, name: "에어컨", status: false },
//         ]}
//       ></PolarSPOTMiniCard>
//       <PolarSPOTMiniCard
//         deviceType="light"
//         roomId={1}
//         status={true}
//         switches={[
//           { switchId: 1, name: "스위치1", status: true },
//           { switchId: 2, name: "스위치2", status: false },
//         ]}
//       ></PolarSPOTMiniCard>
//       <EnvironmentalSensorCard></EnvironmentalSensorCard>

//       {/* API 받아온 내용에서 map으로 돌아가면서 렌더링 */}
//       {/* {mockData.map((room, roomidx) => {

//       })} */}
//     </Styled.Wrapper>
//   );
// }
