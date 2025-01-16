import * as Styled from "./PolarSPOTMiniCard_style";
import Card from "../Card/Card";
import tv from "../../assets/tv.png";
import newaircondition from "../../assets/newaircondition.png";
import { useState } from "react";

export default function SPOTMiniCard({ name, agt, me, data }) {
  // 대회의실만 에어컨, tv 모두 다 있음
  const conferenceRoom = me === "61b1";
  const [isOn, setIsOn] = useState(
    conferenceRoom
      ? [
          { subName: "에어컨", state: data.P1.val },
          { subName: "TV", state: data.P2.val },
        ]
      : [{ subName: "에어컨", state: data.P1?.val === 1 }]
  );

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

  return (
    <Card placeText={name}>
      <Styled.Top>
        {isOn.map((spotmini, idx) => (
          <Styled.ButtonContainer key={idx}>
            <Styled.Button
              onClick={() => handleButton(idx)}
              $isActive={spotmini.status}
            >
              <Styled.Icon
                src={spotmini.subName === "에어컨" ? newaircondition : tv}
                alt={spotmini.subName}
              />
            </Styled.Button>
            <Styled.IconText>{spotmini.subName}</Styled.IconText>
          </Styled.ButtonContainer>
        ))}
      </Styled.Top>
    </Card>
  );
}
