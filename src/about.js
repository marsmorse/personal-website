import React from "react";
import "./index.css";
import headshoot from "./Assets/Headshoot.png";

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 style={{ color: "white", textAlign: "left" }}>About Me</h1>
        <div className="cont">
          <img
            src={headshoot}
            alt="insert headshot here"
            className="circleIcon"
          />
          <p>
            Hello! I'm Marshall a junior pursuing a BS in computer science at
            the University of California Santa Cruz and this is my website.
          </p>
          <p>
            My coding story starts in high school, when I took my first coding
            class after enjoying my schools digital design courses. I then
            graduated in 2014 and decided to study Business Management at
            Carthage College, a small private school in Kenosha, Wisconsin. I
            decided on Carthage after being recruited to play Lacrosse there.
            After two years there I wanted to change my career path to that of
            an enlightened stem field so I chose to give computer science
            another shot. So I transferred to Diablo Valley College to
            eventually transfer to University of California Santa Cruz in the
            Fall of 2018. Where I intend to Graduate in the Spring of 2020.
          </p>

          <p>
            When I'm not coding I'm ususally enjoying the outdoors or relaxing
            with friends. Some of my passions include music, DJ'ing, the
            outdoors, lacrosse, racing, and snowboarding. If I weren't pursuing
            computer science I would probably be doing something in the music
            field like management or promotion.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
