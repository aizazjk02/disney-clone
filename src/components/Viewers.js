import React from "react";
import styled from "styled-components";
import ViewerImgOne from "../images/viewers-disney.png";
import ViewerImgTwo from "../images/viewers-marvel.png";
import ViewerImgThree from "../images/viewers-national.png";
import ViewerImgFour from "../images/viewers-pixar.png";
import ViewerImgFive from "../images/viewers-starwars.png";
export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={ViewerImgOne} alt="" />
      </Wrap>
      <Wrap>
        <img src={ViewerImgTwo} alt="" />
      </Wrap>
      <Wrap>
        <img src={ViewerImgThree} alt="" />
      </Wrap>
      <Wrap>
        <img src={ViewerImgFour} alt="" />
      </Wrap>
      <Wrap>
        <img src={ViewerImgFive} alt="" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0px 26px;
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
   padding-top :56.25% ;
   border-radius: 10px;
   box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px , 
   rgb(0 0 0 /73%) 0px 16px 10px -10px;
   cursor: pointer;
   overflow: hidden;
   position: relative;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
   border: 3px solid rgba(249 249 249/10%);

   img {
       inset:0px;
       display: block;
       height: 100%;
       object-fit: cover;
       opacity: 1;
       position: absolute;
       transition: opacity 500ms ease-in-out 0s;
       width: 100%;
       z-index:1;
       top:0;
   }
`;
