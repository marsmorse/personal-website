import React from "react";
import "./index.css";
import headshoot from "./Assets/Headshoot.png";

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <h1
          className="sectionHead"
          style={{ color: "white", textAlign: "center" }}
        >
          About Me
        </h1>
        <div className="cont">
          <img
            src={headshoot}
            alt="insert headshot here"
            className="circleIcon"
          />
          <p>
            <span id="hello">Hello! </span>I'm Marshall a junior pursuing a BS
            in computer science at the University of California Santa Cruz and
            this is my website.
          </p>
          <p>
            My coding journey began in high school, when I took my first coding
            class after enjoying a few digital design courses. When I graduated
            in 2014 I decided to study Business Management at Carthage College,
            a small private school in Kenosha, Wisconsin. I chose Carthage
            because of its Midwest location and its competitive division three
            lacrosse program. After enjoying two years there and competing in
            two NCAA division three tournaments, I decided to change my career
            path and give computer science another shot. So, I transfered to
            Diablo Valley College to eventually transfer to University of
            California Santa Cruz in the Fall of 2018, where I intend to
            Graduate with a Bachelor of Science in Computer Science in the
            Spring of 2020.
          </p>

          <p>
            Beyond Coding I have experience working a variety of jobs. I was a
            cashier at Whole Foods, a parking attendant for Douglas Parking, a
            prep chef for Freebird World Burrito, and an assistant coach for
            Acalanes High School's Mens Lacrosse team. All of these experiences
            have helped grow my perspective along with instill a strong work
            ethic. My passions outside of include listening to music, DJ'ing,
            hiking, backpacking, playing lacrosse, racing cars, and
            snowboarding. I'm always looking to connect so please don't hesitate
            to reach out!
          </p>
        </div>
      </div>
    );
  }
}
export default About;
