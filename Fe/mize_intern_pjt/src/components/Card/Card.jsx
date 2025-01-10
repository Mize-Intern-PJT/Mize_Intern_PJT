import * as Styled from "./Card_style";

export default function Card({ top, placeText, stateText }) {
  const location = "김영훈 대표";
  const typeName = "플러그";
  const state = "꺼짐";

  return (
    <Styled.Wrapper>
      <Styled.Top>{top}</Styled.Top>
      <Styled.Bottom>
        <Styled.PlaceText>{placeText}</Styled.PlaceText>
        <Styled.StateText>{stateText}</Styled.StateText>
      </Styled.Bottom>
    </Styled.Wrapper>
  );
}
