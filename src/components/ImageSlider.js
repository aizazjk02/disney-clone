import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import SliderImageOne from "../images/slider-badag.jpg";
import SliderImageTwo from "../images/slider-badging.jpg";
import SliderImageThree from "../images/slider-scale.jpg";
import SliderImageFour from "../images/slider-scales.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return ( 
    <Carousel {...settings}>
      <Wrap>
        <a href=".">
          <img src={SliderImageOne} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href=".">
          <img src={SliderImageTwo} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href=".">
          <img src={SliderImageThree} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href=".">
          <img src={SliderImageFour} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  width: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-out 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150 158 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow:rgb( 0 0 0 / 69%) 0px 26px 30px -10px ,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249,249,249,.8);
            transition: border .3s ease;
        }
    }

`;
export default ImageSlider;
