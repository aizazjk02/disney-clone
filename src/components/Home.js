/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BackgroundImg from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import { Viewers } from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../app/features/movies/movieSlice";
import { selectUserName } from "../app/features/user/userSlice";
import { selectNewDisney } from "../app/features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const data = useSelector(selectNewDisney);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movie").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      {data ? (
        <>
          <Recommends />
          <NewDisney />
          <Originals />
          <Trending />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${BackgroundImg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
