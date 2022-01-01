import React from "react";
import styled from "styled-components";
import LoginBackground from "../images/login-background.jpg";
import CTAImageOne from "../images/cta-logo-one.svg";
const Login = (props) => {
  return (
    <Container>
          <Content>
              <CTA>
                  <CTALogoOne src={CTAImageOne}/>
              </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

// This is our main container
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
// This is our main content
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url(${LoginBackground});
  height: 100%;
  background-size: cover;
  background-position: top;

 /*If the image is too large then we can use this*/
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom:2vw;
  max-width:650px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-right:auto;
  margin-left:auto;
  animation:opacity .2s ease-out;
`

const CTALogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    width:100%;
    display:block;
`
export default Login;
