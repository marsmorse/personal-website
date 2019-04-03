import React from "react";

class Home extends React.Component {
  componentDidMount() {
    document.addEventListener("scroll", function() {
      if (window.scrollY === 500) {
      }
    });
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div id="introCont">
          <h2>
            <span>Hello! </span>
          </h2>
          <h2>I'm</h2>
          <h1>Marshall Morse</h1>
          <svg
            width="866"
            height="2"
            viewBox="0 0 866 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H866"
              stroke="url(#paint0_linear)"
              stroke-width="0.75"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="1"
                x2="866"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.0001" stop-color="white" stop-opacity="0" />
                <stop offset="0.475138" stop-color="white" stop-opacity="0.7" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <p>Scroll down to check me out</p>
        </div>
      </div>
    );
  }
}

export default Home;
