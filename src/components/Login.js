import React from "react";
import styled from "styled-components";
import LoginBackground from "../images/login-background.jpg";
import CTAImageOne from "../images/cta-logo-one.svg";
import CTAImageTwo from "../images/cta-logo-two.png";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={CTAImageOne} />
          <SignUp>Get All There</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21. the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src={CTAImageTwo}/>
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
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  animation: opacity 0.2s ease-out;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  display: block;
`;

// A sign  up component is nothing but the get all there button the home screen
const SignUp = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  background: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
color: hsla(0,0,95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`
export default Login;
