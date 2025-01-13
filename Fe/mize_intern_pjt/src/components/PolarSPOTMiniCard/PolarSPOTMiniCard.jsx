import * as Styled from "./PolarSPOTMiniCard_style";
import Card from "../Card/Card";
import light from "../../assets/light.png";
import remotecontrol from "../../assets/remotecontrol.png";
import lightbulb from "../../assets/lightbulb.png";
import tv from "../../assets/tv.png";
import aircondition from "../../assets/aircondition.png";

import newaircondition from "../../assets/newaircondition.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTv,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// 스위치, tv, 에어컨 아이콘 가져오기
const getIcon = (deviceType, name) => {
  if (deviceType === "light") return lightbulb;
  else if (name === "TV") return tv;
  else if (name === "에어컨") return newaircondition;
};

export default function PolarSPOTMiniCard0({
  deviceType,
  roomId,
  status,
  switches,
  controls,
}) {
  // test.js의 controls를 배열로 관리리
  const [miniControls, setMiniControls] = useState(
    deviceType === "light" ? switches : controls
  );

  // status 관리
  // 해당 번호의 status를 바꿈
  const handleButton = (index) => {
    setMiniControls((prevControls) => {
      const newControls = [...prevControls];
      newControls[index] = {
        ...newControls[index],
        status: !newControls[index].status,
      };
      return newControls;
    });
    // console.log(miniControls);
  };

  // 켜진 버튼 수 계산
  const countActiveButton = miniControls.filter(
    (control) => control.status
  ).length;

  const location = "대회의실";
  const typeText = "전등";

  return (
    <Card
      placeText={`Room ${roomId}`}
      typeText={deviceType === "light" ? "전등" : "리모컨"}
      firstStateText={countActiveButton}
      secondStateText={countActiveButton > 0 ? "켜짐" : "꺼짐"}
    >
      {/* 배열 돌면서 버튼 렌더링 */}
      <Styled.Top>
        {miniControls.map((control, idx) => (
          <Styled.ButtonContainer key={idx}>
            <Styled.Button
              onClick={() => handleButton(idx)}
              $isActive={control.status}
            >
              <Styled.Icon
                src={getIcon(deviceType, control.name)}
                alt={control.name}
              />
            </Styled.Button>
            <Styled.IconText>
              {deviceType === "light" ? control.name : control.name}
            </Styled.IconText>
          </Styled.ButtonContainer>
        ))}
        {/* <Styled.ButtonContainer>
          <Styled.Button>
            <Styled.Icon src={lightbulb}></Styled.Icon>
          </Styled.Button>
          <Styled.IconText>스위치1</Styled.IconText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer>
          <Styled.Button>
            <Styled.Icon src={lightbulb}></Styled.Icon>
          </Styled.Button>
          <Styled.IconText>스위치1</Styled.IconText>
        </Styled.ButtonContainer>{" "} */}
      </Styled.Top>
    </Card>
  );
}
