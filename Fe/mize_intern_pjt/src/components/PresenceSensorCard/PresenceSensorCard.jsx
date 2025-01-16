import React, { useState } from "react";
import * as Styled from "./PlugPresenceCard_style";
import sensor from "../../assets/sensor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

export default function PlugPresenceCard({ state, name, timestamp, agt, me }) {
  const [isPresenece, setIsPresenece] = useState(state);

  // PresenceSensor 상태 변경 api
  //   const togglePresence = async () => {
  //     try {
  //       const respone = await fetch("http://localhost:3000/api/presence", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           state: !isPresenece,
  //           name: name,
  //           timestamp: timestamp,
  //           agt: agt,
  //           me: me,
  //         }),
  //       });
  //       setIsPresenece(!isPresenece);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const time = new Date(timestamp);
  // 타임스탬프 계산해서 1시간 이하는 ~분 전, 1시간 이상은 ~시간 전으로 표시

  // API 연결 전 용도
  const handleButtonChange = (e) => {
    const newState = !isPresenece;
    setIsPresenece;
    newState;
  };

  return (
    <Card
      placeText={name}
      firstStateText={isPresenece ? "동작 감지됨" : "움직임 없음"}
      secondStateText={timestamp} // + time
    >
      <Styled.Top>
        {/* 이 아이콘은 props로 처리 */}
        <Styled.Icon src={sensor} alt="sensor" />
        {/* api 연결하면 onClick={togglePresence} */}
        <Styled.Button onClick={handleButtonChange} $isPresenece={isPresenece}>
          <FontAwesomeIcon icon={faPerson} size="xl" color="white" />
        </Styled.Button>
      </Styled.Top>
    </Card>
  );
}
