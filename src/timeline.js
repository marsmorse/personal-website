import React from "react";
import "./timeline.css";

const zine = {
  stroke: "pink"
};
class Line extends React.Component {
  render() {
    return (
      <div className="line">
        <svg height="800px" width="4px">
          <lines
            className="vertical"
            x1="0"
            y1="0"
            x2="1"
            y2="490"
            style={zine}
          />
        </svg>
      </div>
    );
  }
}
class Box extends React.Component {
  render() {
    return <div className="box" />;
  }
}
class Timeline extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="box bleft">
          <p>
            Became an eagle scout in 2013,which was an increadible journey with
            many amazing outdoor and leadership experiences.
          </p>
        </div>
        <div className="box b-right">
          <p>
            Played three years of Varsity Lacrosse at Acalanes High School
            recieving two 1st team all league awards and leading my team to a
            division two Northern California Conference championship in 2013
          </p>
        </div>
        <div className="box bleft">
          <p>Graduated From Acalanes Highschool in Spring of 2014.</p>
        </div>
        <div className="box b-right">
          <p>
            worked as a parking attendant at Douglas parking over the summer of
            2014
          </p>
        </div>
        <div className="box bleft">
          <p>
            After Highschool in the fall of 2014, I attended Carthage College in
            Kenosha Wisconsin to pursue a business degree. While there I played
            in two NCAA division three lacrosse tournaments in 2015 and 2016. My
            sophomore year I took an intro computer science course which kindled
            my interest in the computing and eventually led to my pursuit of the
            field.
          </p>
        </div>
        <div className="box b-right">
          <p>
            Worked as a Prep Chef for Freebird World Burrito preparing cold side
            foods like guacamole and salsa.
          </p>
        </div>

        <div className="box b-right">
          <p>
            I transferred to Diablo Valley College where I studied Computer
            Science as well as continued to play lacrosse. At DVC I joined
            theDVCoders the programming club and where I first delved in web
            design. Took courses in C++ such as database and algorithms and
            advanced coding with C++.
          </p>
        </div>
        <div className="box bleft">
          <p>
            In the Summer of 2016, I Started working at Whole Foods as a
            customer service team member. After working for a few months I was
            trained to become a cashier where I was able to provide excellent
            customer service experience and connect with customers in a
            meaningful way.
          </p>
        </div>
        <div className="box b-right">
          <p>
            Worked as a junior varsity lacrosse coach for Acalanes High School
            and blah blah blah
          </p>
        </div>
        <div className="box bleft">
          <p>
            Worked as a junior varsity lacrosse coach for Acalanes High School
            and blah blah blah
          </p>
        </div>
        <Line />
      </div>
    );
  }
}
export default Timeline;
