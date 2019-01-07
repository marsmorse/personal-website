import React from "react";
import styled from "styled-components";
import "./index.css";

const Content = styled.div`
  color: #4c4c4c;
  background-position: fixed;
  background-size: cover;
  text-align: left;
  padding: 10px;
  display: inline-block;
  width: 60%;
`;
const Bio = styled.div`
  color: #4c4c4c;e
`;
const School = styled.div`
  display: inline-block;
  width: 50%;
`;
class About extends React.Component {
  render() {
    return (
      <div>
        <Content id="about">
          <h1 style={{ color: "#4c4c4c" }}>About Me</h1>

          <Bio>
            <p className="bio">
              <span>Hello! </span>my name is Marshall Morse and I'm a junior at
              the University of California Santa Cruz pursuing a B.S. in
              computer science. During my time at UCSC, I'm looking to focus on
              machine learning and graphics. Outside of coding I'm passionate
              about music, the outdoors, lacrosse, and snowboarding.
            </p>
          </Bio>
        </Content>
        <Content>
          <h1 style={{ color: "#4c4c4c" }}>Education</h1>
          <School>
            <p>
              <span>University of California Santa Cruz</span> - Santa Cruz,
              California
            </p>
          </School>
          <School>
            <p>
              <span>Diablo Valley College</span> - Pleasant Hill, California
            </p>
          </School>
          <School>
            <p>
              <span>Carthage College</span> - Kenosha, Wisconsin
            </p>
          </School>
          <School>
            <p>
              <span>Acalanes High School</span> - Lafayette, California
            </p>
          </School>
        </Content>
      </div>
    );
  }
}

export default About;
