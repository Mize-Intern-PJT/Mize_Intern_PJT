import * as Styled from "./Home_style";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";

export default function Home() {
  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>마이즈</Styled.Title>
      </Styled.Header>
      <Filter />
    </Styled.HomeWrapper>
  );
}
