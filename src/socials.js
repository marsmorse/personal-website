import React from "react";
import LI from "./Assets/LI.svg";
import TW from "./Assets/TW.svg";
import GH from "./Assets/GH.svg";
import mail from "./Assets/mail.svg";
class Social extends React.Component {
  render() {
    return (
      <div className="contactBox" id="right">
        <svg
          width="50"
          height="10"
          viewBox="0 0 100 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line opacity="0.6" y1="0.5" x2="100" y2="0.5" stroke="white" />
        </svg>
        <a href="mailto:marsmorse@gmail.com">
          <img src={mail} className="SocialIcon" />
        </a>
        <a href="https://www.linkedin.com/in/marshall-morse-607a5297/">
          <img src={LI} className="SocialIcon" />
        </a>
        <a href="https://twitter.com/marsmorse?lang=">
          <img src={TW} className="SocialIcon" />
        </a>
        <a href="https://github.com/marsmorse">
          <img src={GH} className="SocialIcon" />
        </a>
        <svg
          width="50"
          height="9"
          viewBox="0 0 100 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line opacity="0.6" y1="0.5" x2="100" y2="0.5" stroke="white" />
        </svg>
      </div>
    );
  }
}

export default Social;
