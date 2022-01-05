import React from "react";
import styled from "styled-components";
import LogoImage from "../images/logo.svg";
import HomeIcon from "../images/home-icon.svg";
import SearchIcon from "../images/search-icon.svg";
import WatchlistIcon from "../images/watchlist-icon.svg";
import OriginalsIcon from "../images/watchlist-icon.svg";
import MoviesIcon from "../images/movie-icon.svg";
import SeriesIcon from "../images/series-icon.svg";
import { auth, signInWithGoogle } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../app/features/user/userSlice";



const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  // This hook looks for changes in the specified varaible and then executes the given function
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/Home");
      }
    });
  }, [username]);

  // This code handles the google authentication 
  const handleAuth = () => {
    if (!username) {
      signInWithGoogle()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
    }
    else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/")
      }).catch(err => alert(err.message))
    }
  };

  // function to set the user details after login
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src={LogoImage} alt="Disney+" />
      </Logo>
      {!username ? (
        <LoginBtn onClick={() => handleAuth()}>Login</LoginBtn>
      ) : (
        <>
          <NavMenu>
            <a href="/Home">
              <img src={HomeIcon} alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src={SearchIcon} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/Home">
              <img src={WatchlistIcon} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href="/Home">
              <img src={OriginalsIcon} alt="ORIGINALSe" />
              <span>ORIGINALS</span>
            </a>
            <a href="/Home">
              <img src={MoviesIcon} alt="MOVIESe" />
              <span>MOVIES</span>
            </a>
            <a href="/Home">
              <img src={SeriesIcon} alt="SERIES" />
              <span>SERIES</span>
            </a>
            </NavMenu>
            <SignOut>
              <UserImg src={userPhoto} alt={username} />
              <DropDown onClick={handleAuth}>Sign Out</DropDown>
            </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    padding: 0 12px;
    align-items: center;

    img {
      height: 20px;
      max-height: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        width: auto;
        height: 2px;
        position: absolute;
        bottom: -6px;
        left: 0px;
        right: 0px;
        content: "";
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: none;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginBtn = styled.a`
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 80%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19 19 19);
  border: 1px solid rgba(151 151 151 /34%);
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
  letter-spacing: 3px;
  text-align: center;
  width: 100px;
  opacity: 0;

`
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: opacity 1s ease-out;
    }
  }
`
export default Header;
