import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
import PlayBtnImage from "../images/play-icon-black.png";
import TrailerBtnImage from "../images/play-icon-white.png";
import GroupWatchImage from "../images/group-icon.png";
const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movie")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else console.log("Document is not present");
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img alt="Play button" src={PlayBtnImage} />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src={TrailerBtnImage} alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src={GroupWatchImage} alt="" />
            </div>
          </GroupWatch>
        </Controls>

              <SubTitle>{ detailData.subTitle}</SubTitle>
              <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  opacity: 0.8;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  /* margin: 0px auto; */
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  height: 56px;
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249 249 249);
  border: none;
  color: rgb(0 0 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198 198 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0 0 0 /30%);
  border: 1px solid rgb(249 249 249);
  color: rgb(249 249 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0/60%);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249 249 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0 0 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
    color:rgb(249 249 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width:768px) {
        font-size: 12px;
    }
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249 249 249);

    @media (max-width:768px) {
        font-size: 14px;
    }
`
export default Detail;
