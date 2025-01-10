import React, { useState, useEffect } from "react";
import * as Styled from "./PlugPresenceCard_style";
import power from "../../assets/power.png";
import sensor from "../../assets/sensor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { PALETTE } from "../../styles/colors";
// type, place, state
export default function PlugPresenceCard({ type, place, initialstate }) {
  const [isActive, setIsActive] = useState(initialstate);

  const handleButtonChange = (e) => {
    const newState = !isActive;
    setIsActive(newState);
    // console.log(isActive);
  };

  // useEffect(() => {
  //   console.log(isActive);
  // }, [isActive]);

  // API 연결 후, Text 고민..
  const stateText = () => {};

  return (
    <Styled.Wrapper>
      <Styled.Top>
        {/* 이 아이콘은 props로 처리 */}
        <Styled.Icon
          src={type === "power" ? power : sensor}
          alt={type === "power" ? "power" : "sensor"}
        />
        {/* true/false에 따라 버튼과 icon의 색깔이 바뀌어야함 */}
        <Styled.Button
          onClick={handleButtonChange}
          type={type}
          $isActive={isActive}
        >
          {/* props로 플러그인지, 재실인지에 따라 아이콘 달라짐 */}
          <FontAwesomeIcon
            icon={type === "power" ? faPowerOff : faPerson}
            size="xl"
            color="white"
          />
        </Styled.Button>
      </Styled.Top>
      <Styled.InfoText>
        {/* props로 텍스트 처리? */}
        <Styled.PlaceText>{place}</Styled.PlaceText>
        <Styled.StateText>꺼짐 0W</Styled.StateText>
      </Styled.InfoText>
    </Styled.Wrapper>
  );
}
