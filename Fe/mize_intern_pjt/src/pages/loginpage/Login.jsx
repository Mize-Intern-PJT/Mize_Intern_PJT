import { Link } from "react-router-dom";
import * as Styled from "./Login_style";

export default function login() {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        MIZE IOT
        <span>CONTROL APP</span>
      </Styled.Title>
      <Styled.LoginWrapper>
        <Styled.Login></Styled.Login>
        <Styled.Login></Styled.Login>
        <Styled.Button></Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Wrapper>
  );
}
