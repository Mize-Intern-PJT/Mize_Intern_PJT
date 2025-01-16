import * as Styled from "./Card_style";

export default function Card({
  children,
  placeText,
  firstStateText,
  secondStateText,
}) {
  const location = "김영훈 대표";
  const typeName = "플러그";
  const state = "꺼짐";

  return (
    <Styled.Wrapper>
      <Styled.Top>{children}</Styled.Top>
      <Styled.Bottom>
        <Styled.InfoText>
          <Styled.PlaceText>{placeText}</Styled.PlaceText>
        </Styled.InfoText>
        <Styled.InfoText>
          <Styled.StateText>{firstStateText}</Styled.StateText>
          <Styled.StateText>{secondStateText}</Styled.StateText>
        </Styled.InfoText>
      </Styled.Bottom>
    </Styled.Wrapper>
  );
}
