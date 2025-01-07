import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #574a4a; */
`;

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f2f2f2;
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Container>{children}</Container>
    </PageWrapper>
  );
};

export default Layout;
