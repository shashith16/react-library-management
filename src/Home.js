import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeDiv>
      <Title>Welcome to Library Management System(LMS)</Title>
      <LinksDiv>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </LinksDiv>
    </HomeDiv>
  );
}

const Title = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HomeDiv = styled.div``;

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: darkorange;
  color: black;
  height: 150px;
`;

export default Home;
