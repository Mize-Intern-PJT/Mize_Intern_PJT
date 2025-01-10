import React from "react";
import * as Styled from "./EnvironmentalSensorCard_style";

export default function EnvironmentalSensorCard(props) {
  const degree = 23.7;
  const humidity = 22;
  const illuminance = 20;
  const location = "임원실1";
  const typeName = "환경센서";

  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.DegreeInfo>{degree}º</Styled.DegreeInfo>
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
      <Styled.PlaceText>
        {location} {typeName}
      </Styled.PlaceText>
    </Styled.Wrapper>
  );
}
