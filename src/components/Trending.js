import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "../app/features/movies/movieSlice";
const Trending = () => {
    const movies = useSelector(selectTrending)
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies.map((movie, key) => (
          <Wrap key={movie.id}>
            <Link to={"/detail/" + movie.id}>
              <img alt={movie.title} src={movie.cardImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 25px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249 249 249/ 10%);

  img {
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    opacity: 1;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    transform: scaleX(1.02);
    border-color: rgb(249 249 249 /80%);
  }
`;
export default Trending;
