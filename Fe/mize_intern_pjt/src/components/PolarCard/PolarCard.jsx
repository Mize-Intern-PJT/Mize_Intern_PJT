import * as Styled from "./PolarSPOTMiniCard_style";
import Card from "../Card/Card";
import lightbulb from "../../assets/lightbulb.png";
import { useState } from "react";

export default function PolarCard({ devtype, name, agt, me, data }) {
  // 전등이 1구인지 2구인지
  const isDual = devtype === "SL_SW_ND2";
  // 1구 2구에 따라 분리
  const initalState = isDual
    ? [
        { subName: "스위치1", state: data.P1?.val === 1 },
        { subName: "스위치2", state: data.P2?.val === 1 },
      ]
    : [{ subName: "스위치1", state: data.P1?.val === 1 }];

  const [isOn, setIsOn] = useState(initalState);

  // status 관리
  // 해당 번호의 status를 바꿈
  const handleButton = (index) => {
    setIsOn((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = {
        ...updatedStates[index],
        state: !updatedStates[index].state,
      };
      return updatedStates;
    });
  };

  // API 연결
  //   const handleToggle = async (index) => {
  //     const targetSwitch = index === 0 ? "P1" : "P2"; // 대상 스위치 결정

  //     try {
  //       // API 호출
  //       // API 주소 뒤에 P1, P2 붙이는 걸로로
  //       const response = await fetch(`/api/device/${me}/polar`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({}),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to toggle switch");
  //       }

  //       // 상태 업데이트
  //       handleButton(index);
  //     } catch (error) {
  //       console.error("Error toggling switch:", error);
  //     }
  //   };

  // 켜진 버튼 수 계산
  const countActivePolar = isOn.filter((polar) => polar.state).length;

  return (
    <Card
      placeText={name}
      firstStateText={countActivePolar}
      secondStateText={countActivePolar > 0 ? "켜짐" : "꺼짐"}
    >
      <Styled.Top>
        {isOn.map((polar, idx) => (
          <Styled.ButtonContainer key={idx}>
            <Styled.Button
              onClick={() => handleButton(idx)}
              $isOn={polar.state}
            >
              <Styled.Icon src={lightbulb} alt={polar.subName} />
            </Styled.Button>
            <Styled.IconText>{polar.subName}</Styled.IconText>
          </Styled.ButtonContainer>
        ))}
      </Styled.Top>
    </Card>
  );
}
