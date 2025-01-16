import React, { useState } from "react";
import * as Styled from "./PresenceSensorCard_style";
import sensor from "../../assets/sensor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

export default function PresenceSensorCard({ name, agt, data }) {
  const status = data.M1.val;
  const timestamp = data.M1.valts;
  const [isPresenece, setIsPresenece] = useState(status);

  function getTimeAgo(timestamp) {
    const now = Date.now(); // 현재 시간
    const diffInMs = now - timestamp; // 차이를 밀리초로 계산

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (seconds < 60) {
      return `${seconds}초 전`;
    } else if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 7) {
      return `${days}일 전`;
    } else {
      return `${weeks}주 전`;
    }
  }

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

  return (
    <Card
      placeText={name}
      firstStateText={isPresenece ? "동작 감지됨" : "움직임 없음"}
      secondStateText={getTimeAgo(timestamp)} // + time
    >
      <Styled.Top>
        {/* 이 아이콘은 props로 처리 */}
        <Styled.Icon src={sensor} alt="sensor" />
        {/* api 연결하면 onClick={togglePresence} */}
        <Styled.Button $isPresenece={isPresenece}>
          <FontAwesomeIcon icon={faPerson} size="xl" color="white" />
        </Styled.Button>
      </Styled.Top>
    </Card>
  );
}
