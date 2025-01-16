import React, { useState, useEffect } from "react";
import * as Styled from "./PlugPresenceCard_style";
import power from "../../assets/power.png";
import sensor from "../../assets/sensor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { PALETTE } from "../../styles/colors";
import Card from "../Card/Card";

// type, place, state
export default function PlugCard({ state, name, me, agt, consumption }) {
  const [isOn, setIsOn] = useState(state);

  // Plug 상태 변경 api
  const togglePower = async () => {
    try {
      const respone = await fetch("http://localhost:3000/api/plug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state: !isOn,
          name: name,
          me: me,
          agt: agt,
          consumption: consumption,
        }),
        // {
        //     "id" : "101",
        //     "method" : "EpSet",
        //     "system" : {
        //         "ver" : "{{ver}}",
        //         "lang" : "{{lang}}",
        //         "sign" : "{{sign}}",
        //         "userid" : "{{userid}}",
        //         "appkey" : "{{appkey}}",
        //         "time" : "{{time}}"
        //     },
        //     "params" : {
        //         "agt" : "pleaseFill",
        //         "me" : "pleaseFill",
        //         "idx" : "pleaseFill"
        //     }
        // }
      });
      setIsOn(!isOn);
    } catch (error) {
      console.log(error);
    }
  };

  // API 연결 전 용도
  const handleButtonChange = (e) => {
    const newState = !isOn;
    setIsOn(newState);
  };

  return (
    <Card
      placeText={name}
      firstStateText={state ? "켜짐" : "꺼짐"}
      secondStateText={consumption + "W"}
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
