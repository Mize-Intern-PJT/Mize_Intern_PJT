import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styled from "./Login_style";
import idIcon from "../../assets/id_icon.png";
import pwIcon from "../../assets/pw_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const nav = useNavigate();
  const [loginInput, setLoginInput] = useState({
    userId: "",
    password: "",
  });
  const [error, setError] = useState(""); // 에러 메시지 상태

  const handleInputChange = (e) => {
    setLoginInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(loginInput);
  };

  const handleClearUserId = (e) => {
    setLoginInput((prev) => ({
      ...prev,
      userId: "",
    }));
  };

  const handleClearPassword = (e) => {
    setLoginInput((prev) => ({
      ...prev,
      password: "",
    }));
  };

  // API 연결 필요
  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("url", {
        userId: loginInput.userId,
        password: loginInput.password,
      });
      if (res.status === 200) {
        nav("/home"); // 홈 화면으로 이동
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 예비 버튼
  const onLoginTemp = () => {
    if (!loginInput.userId || !loginInput.password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    nav("/home");
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>
        MIZE IOT
        <span>CONTROL APP</span>
      </Styled.Title>
      <Styled.LoginWrapper>
        <Styled.Login>
          <Styled.Icon src={idIcon} alt="id" />
          <Styled.LoginText
            type="text"
            placeholder="아이디"
            name="userId"
            value={loginInput.userId}
            onChange={handleInputChange}
          ></Styled.LoginText>
          {loginInput.userId.length > 0 ? (
            <FontAwesomeIcon
              icon={faX}
              size="xs"
              color="#837C7C" // !!!! pallet로 변경
              onClick={handleClearUserId}
            />
          ) : (
            ""
          )}
        </Styled.Login>
        <Styled.Login>
          <Styled.Icon src={pwIcon} alt="pw" />
          <Styled.LoginText
            type="password"
            placeholder="비밀번호"
            name="password"
            value={loginInput.password}
            onChange={handleInputChange}
          ></Styled.LoginText>
          {loginInput.password.length > 0 ? (
            <FontAwesomeIcon
              icon={faX}
              size="xs"
              color="#837C7C"
              onClick={handleClearPassword}
            />
          ) : (
            ""
          )}
        </Styled.Login>
        {/* 1. 유효성 검사 -> 2. 라우팅*/}
        {/* 로그인 성공 시 홈 페이지로 이동 */}
        {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}{" "}
        {/* 에러 메시지 */}
        <Styled.LoginButton onClick={onLoginTemp}>로그인</Styled.LoginButton>
      </Styled.LoginWrapper>
    </Styled.Wrapper>
  );
}
