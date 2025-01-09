import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #c96666; */
`;

const Container = styled.div`
  width: 100%;
  /* width: ${(props) => `${100 / props.scale}%`}; 스케일에 따라 너비 조정
  height: ${(props) => `${100 / props.scale}vh`}; 스케일에 따라 높이 조정 */
  max-width: 768px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: "white";
  position: relative;
  // 테스트
  /* transform: scale(${(props) => props.scale || 1}); /* 스케일 조정
  transform-origin: top left; 확대/축소 기준점 */
`;

const Layout = ({ children }) => {
  // const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const baseWidth = 344; // 기준 너비
  //     const currentWidth = window.innerWidth;

  //     // 최소/최대 스케일 값을 제한
  //     const calculatedScale = Math.min(
  //       1,
  //       Math.max(0.5, currentWidth / baseWidth)
  //     );
  //     setScale(calculatedScale);
  //   };

  //   handleResize(); // 초기 스케일 설정
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    // <PageWrapper>
    //   <Container scale={scale}>{children}</Container>
    // </PageWrapper>
    <PageWrapper>
      <Container>{children}</Container>
    </PageWrapper>
  );
};

export default Layout;
