import React from "react";
import * as Styled from "./EnvironmentalSensorCard_style";

export default function EnvironmentalSensorCard({ name, agt, me, data }) {
  const degree = data.T.v;
  const humidity = data.H.v;
  const illuminance = data.Z.v;

  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.DegreeInfo>{degree}ºC</Styled.DegreeInfo>
        <Styled.SubInfos>
          <Styled.SubInfo>
            {humidity}
            <Styled.Unit>%RH</Styled.Unit>
          </Styled.SubInfo>
          <Styled.SubInfo>
            {illuminance}
            <Styled.Unit>LUX</Styled.Unit>
          </Styled.SubInfo>
        </Styled.SubInfos>
      </Styled.Top>
      <Styled.PlaceText>{name}</Styled.PlaceText>
    </Styled.Wrapper>
  );
}
