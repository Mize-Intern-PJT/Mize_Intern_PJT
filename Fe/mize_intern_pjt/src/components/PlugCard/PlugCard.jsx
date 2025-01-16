import React, { useState } from "react";
import * as Styled from "./PlugCard_style";
import power from "../../assets/power.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";

export default function PlugCard({ name, agt, data }) {
  const status = data.P1.val;
  const consumption = data.P3.v.toFixed(1); // 소수점 첫째자리까지만 표시
  const formatNumber = (num) => {
    return num.toString().replace(/\.0+$/, "");
  }; //.0 일 때는 소수점 제거
  const [isOn, setIsOn] = useState(status);

  // // Plug 상태 변경 api
  // const togglePower = async () => {
  //   try {
  //     const respone = await fetch("http://localhost:3000/api/plug", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         state: !isOn,
  //         name: name,
  //         me: me,
  //         agt: agt,
  //         consumption: consumption,
  //       }),
  //       // {
  //       //     "id" : "101",
  //       //     "method" : "EpSet",
  //       //     "system" : {
  //       //         "ver" : "{{ver}}",
  //       //         "lang" : "{{lang}}",
  //       //         "sign" : "{{sign}}",
  //       //         "userid" : "{{userid}}",
  //       //         "appkey" : "{{appkey}}",
  //       //         "time" : "{{time}}"
  //       //     },
  //       //     "params" : {
  //       //         "agt" : "pleaseFill",
  //       //         "me" : "pleaseFill",
  //       //         "idx" : "pleaseFill"
  //       //     }
  //       // }
  //     });
  //     setIsOn(!isOn);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // API 연결 전 용도
  const handleButtonChange = (e) => {
    const newState = !isOn;
    setIsOn(newState);
  };

  return (
    <Card
      placeText={name}
      firstStateText={status ? "켜짐" : "꺼짐"}
      secondStateText={formatNumber(consumption) + "W"}
    >
      <Styled.Top>
        <Styled.Icon src={power} alt="Plug" />

        <Styled.Button onClick={handleButtonChange} $isOn={isOn}>
          <FontAwesomeIcon icon={faPowerOff} size="xl" color="white" />
        </Styled.Button>
      </Styled.Top>
    </Card>
  );
}
