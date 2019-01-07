import React from "react";
import Nav from "./nav.js";
import styled from "styled-components";
import About from "./about.js";
import img from "./back.jpg";
const IntroBox = styled.div`
  text-align: center;
  margin-top: 20%;
`;
const Content = styled.div`
  text-align: center;
  height: 100%;
  //background-image: url(${img});
  background-color: #4c4c4c;
  background-size: cover;
  background-position: center;
  backgroundbackground-repeat: no-repeat;
  background-size: contain;
  padding-top: 2%;
  font-family: Helvetica;
  text-align: center;
`;
class Home extends React.Component {
  componentDidMount() {
    document.addEventListener("scroll", function() {
      if (window.scrollY === 500) {
      }
    });
  }
  render() {
    return (
      <Content>
        <Nav />
        <IntroBox>
          <h2>Hello! I'm</h2>
          <h1>Marshall Morse</h1>
          <h2>Software developer and design enthusiast</h2>
        </IntroBox>
      </Content>
    );
  }
}

export default Home;
